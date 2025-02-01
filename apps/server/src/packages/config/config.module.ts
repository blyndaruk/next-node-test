import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleClass } from '@nestjs/config';

// config module
@Module({
  imports: [
    ConfigModuleClass.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
