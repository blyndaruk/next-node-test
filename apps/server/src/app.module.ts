import { Module } from '@nestjs/common';

import { EarhquakesModule } from '@/app/modules/earthquakes/earhquakes.module';
import { ConfigModule } from '@/packages/config';
import { GraphqlModule } from '@/packages/graphql';

@Module({
  imports: [ConfigModule, GraphqlModule, EarhquakesModule],
})
export class AppModule {}
