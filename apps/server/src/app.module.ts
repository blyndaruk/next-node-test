import { Module } from '@nestjs/common';

import { EarhquakesModule } from '@/app/modules/earthquakes/earhquakes.module';
import { ConfigModule } from '@/packages/config';
import { GraphqlModule } from '@/packages/graphql';
import { PrismaModule } from '@/packages/prisma/prisma.module';

@Module({
  imports: [ConfigModule, GraphqlModule, PrismaModule, EarhquakesModule],
})
export class AppModule {}
