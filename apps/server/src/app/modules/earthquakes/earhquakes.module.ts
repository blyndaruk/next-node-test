import { Module } from '@nestjs/common';

import { PrismaModule } from '@/packages/prisma';

import { EarthquakesResolver } from './earthquakes.resolver';

@Module({
  imports: [PrismaModule],
  providers: [EarthquakesResolver],
})
export class EarhquakesModule {}
