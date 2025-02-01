import { Query, Resolver } from '@nestjs/graphql';

import { ErrorGraphqlHandlingDecorator } from '../../../packages/graphql';
import { MessageInterfaceEntity } from '../../repositories/common';

import { EarthquakesEntity } from './entities/earthquakes.entity';

@Resolver()
export class EarthquakesResolver {
  constructor() {}

  @Query(() => EarthquakesEntity)
  @ErrorGraphqlHandlingDecorator(EarthquakesResolver.name)
  findManyEarthquakes(): MessageInterfaceEntity {
    return { message: 'test' };
  }
}
