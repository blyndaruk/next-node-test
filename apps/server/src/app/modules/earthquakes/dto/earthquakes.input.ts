import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class EarthquakesInput {
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
