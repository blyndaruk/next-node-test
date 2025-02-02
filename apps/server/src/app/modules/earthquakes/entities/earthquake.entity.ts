import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class EarthquakeEntity {
  @IsNotEmpty()
  @Field(() => ID)
  id: string;

  @IsNotEmpty()
  @Field(() => String)
  location: string;

  @IsNotEmpty()
  @Field(() => Float)
  magnitude: number;

  @IsNotEmpty()
  @Field(() => Date)
  date: Date;
}
