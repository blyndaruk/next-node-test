import { ForbiddenError } from '@nestjs/apollo';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';

import { CustomLoggerService } from '../../custom-logger';

export const ErrorGraphqlHandlingDecorator = (name?: string) => {
  const logger = new CustomLoggerService();

  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        logger.log(`Operation: ${_key}`, name);

        return await originalMethod.apply(this, args);
      } catch (error) {
        logger.error(`Operation: ${_key}. Error: ${error.message}`, name);

        if (error?.statusCode?.includes(50)) {
          throw new InternalServerErrorException('Internal Server Error');
        } else if (error?.statusCode?.includes(403)) {
          throw new ForbiddenError(error.message);
        } else if (error.message?.length > 70) {
          throw new BadRequestException('Bad Request');
        } else {
          throw new BadRequestException(error.message);
        }
      }
    };

    return descriptor;
  };
};
