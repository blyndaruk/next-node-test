import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    super.log(message, context || '');
  }

  error(message: any, stackOrContext?: string) {
    super.error(message, stackOrContext || '');
  }
}
