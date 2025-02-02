import { Module } from '@nestjs/common';

import { EarthquakesService } from '@/app/modules/earthquakes/earthquakes.service';

import { EarthquakesResolver } from './earthquakes.resolver';

@Module({
  providers: [EarthquakesResolver, EarthquakesService],
})
export class EarhquakesModule {}
