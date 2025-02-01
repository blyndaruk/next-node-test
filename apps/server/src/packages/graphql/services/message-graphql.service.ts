// message graphql service
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageGraphqlService {
  // error
  error(input: string, message: string) {
    return JSON.stringify({ input, message });
  }
}
