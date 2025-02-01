import { Field, ObjectType } from '@nestjs/graphql';

// message interface entity
@ObjectType()
export class MessageInterfaceEntity {
  @Field()
  message: string;
}
