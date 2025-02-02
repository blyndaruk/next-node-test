import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { CreateEarthquakeInput } from '@/app/modules/earthquakes/dto/create-earthquake.input';
import { FindEarthquakesInput } from '@/app/modules/earthquakes/dto/find-earthquakes.input';
import { EarthquakesService } from '@/app/modules/earthquakes/earthquakes.service';
import { EarthquakesEntity } from '@/app/modules/earthquakes/entities/earthquakes.entity';
import { MessageInterfaceEntity } from '@/app/repositories/common';
import { ErrorGraphqlHandlingDecorator, RequestedFieldsDecorator } from '@/packages/graphql';

@Resolver()
export class EarthquakesResolver {
  constructor(private readonly earthquakesService: EarthquakesService) {}

  @Query(() => EarthquakesEntity)
  @ErrorGraphqlHandlingDecorator(EarthquakesResolver.name)
  findManyEarthquakes(
    @Args('input') input: FindEarthquakesInput,
    @RequestedFieldsDecorator() fields: { data: { select: Prisma.EarthquakeSelect } },
  ): Promise<EarthquakesEntity> {
    return this.earthquakesService.findMany(input, fields);
  }

  @Mutation(() => MessageInterfaceEntity)
  @ErrorGraphqlHandlingDecorator(EarthquakesResolver.name)
  createEarthquake(@Args('input') input: CreateEarthquakeInput): Promise<MessageInterfaceEntity> {
    // Temp message return, instead return single instance after FE cache/refetch implemented
    return this.earthquakesService.create(input);
  }
}
