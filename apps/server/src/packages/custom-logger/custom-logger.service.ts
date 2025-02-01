import { ConsoleLogger, Injectable } from '@nestjs/common';

// custom logger service
@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    // const entry = context ? `${context}\t${message}` : `${message}`

    super.log(message, context || '');
  }

  error(message: any, stackOrContext?: string) {
    // const entry = stackOrContext ? `${stackOrContext}\t${message}` : `${message}`

    super.error(message, stackOrContext || '');
  }
}
