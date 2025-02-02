import { Query, Resolver } from '@nestjs/graphql';

import { ErrorGraphqlHandlingDecorator } from '@/packages/graphql';

import { EarthquakesEntity } from './entities/earthquakes.entity';

@Resolver()
export class EarthquakesResolver {
  constructor() {}

  @Query(() => EarthquakesEntity)
  @ErrorGraphqlHandlingDecorator(EarthquakesResolver.name)
  findManyEarthquakes(): EarthquakesEntity {
    return { id: '1' };
  }
}
