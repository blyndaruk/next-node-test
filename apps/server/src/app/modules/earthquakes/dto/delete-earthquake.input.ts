import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteEarthquakeInput {
  @Field()
  @IsUUID()
  id: string;
}
