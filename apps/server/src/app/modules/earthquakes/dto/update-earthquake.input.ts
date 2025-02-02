import { Field, Float, InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';

import { CreateEarthquakeInput } from './create-earthquake.input';

@InputType()
export class UpdateEarthquakeInput extends PartialType(CreateEarthquakeInput) {
  @Field()
  @IsUUID()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  location?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  magnitude?: number;

  @Field({ nullable: true })
  @IsOptional()
  date?: Date;
}
