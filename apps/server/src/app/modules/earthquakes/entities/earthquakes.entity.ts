import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class EarthquakesEntity {
  @IsNotEmpty()
  @Field(() => ID)
  id: string;
}
