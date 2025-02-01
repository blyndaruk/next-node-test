import { Module } from '@nestjs/common';

import { PasswordService } from './password.service';

// password module
@Module({
  providers: [PasswordService],
  exports: [PasswordService],
})
export class PasswordModule {}
