import { Field, ObjectType, PickType } from '@nestjs/graphql';

import { EarthquakeEntity } from '@/app/modules/earthquakes/entities/earthquake.entity';
import { PaginationInterfaceEntity } from '@/app/repositories/common';

@ObjectType()
class EarthquakesEntityPagination extends PickType(PaginationInterfaceEntity, [
  'take',
  'page',
  'pages',
  'order',
  'sort',
  'total',
]) {}

@ObjectType()
export class EarthquakesEntity {
  @Field(() => [EarthquakeEntity])
  readonly data: EarthquakeEntity[];

  @Field(() => EarthquakesEntityPagination)
  readonly pagination: EarthquakesEntityPagination;
}
