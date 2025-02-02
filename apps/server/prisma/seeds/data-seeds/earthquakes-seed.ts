import csv from 'csv-parser';
import { isValid, parse } from 'date-fns';
import { Readable } from 'stream';

import { EarthquakesInput } from '@/app/modules/earthquakes/dto/earthquakes.input';
import { CustomLoggerService } from '@/packages/custom-logger';

const csvUrl = process.env.CSV_SEED_URL!;
const logger = new CustomLoggerService();

async function convertWebStreamToNodeStream(
  webStream: ReadableStream<Uint8Array>,
): Promise<Readable> {
  const reader = webStream.getReader();
  return new Readable({
    async read() {
      try {
        const { done, value } = await reader.read();
        if (done) {
          this.push(null);
        } else {
          this.push(Buffer.from(value));
        }
      } catch (err) {
        this.destroy(err as Error);
      }
    },
  });
}

export const earthquakesSeed = async (): Promise<EarthquakesInput[]> => {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const nodeStream = await convertWebStreamToNodeStream(response.body!);

    const earthquakes: Array<EarthquakesInput> = [];

    await new Promise<void>((resolve, reject) => {
      nodeStream
        .pipe(csv())
        .on('data', (row) => {
          const parsedDate = parse(row.DateTime, 'yyyy/MM/dd HH:mm:ss.SS', new Date());
          earthquakes.push({
            location: `${row.Latitude}, ${row.Longitude}`,
            magnitude: parseFloat(row.Magnitude),
            date: isValid(parsedDate) ? parsedDate : new Date(),
          });
        })
        .on('end', () => {
          logger.log('CSV file successfully processed', 'earthquakesSeed');
          resolve();
        })
        .on('error', reject);
    });

    return earthquakes;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Operation: earthquakesSeed. Error: ${error.message}`);
      throw error;
    }
    throw new Error(String(error));
  }
};
