import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateIf, ValidateNested } from 'class-validator';

// pagination common
@InputType()
class PaginationCommon {
  @IsNotEmpty({ message: 'Take is required' })
  @Field(() => Int)
  readonly take: number;

  @IsNotEmpty({ message: 'Page is required' })
  @Field(() => Int)
  readonly page: number;

  @IsNotEmpty({ message: 'Sort is required' })
  @Field()
  readonly sort: string;

  @IsNotEmpty({ message: 'Order is required' })
  @Field()
  readonly order: string;
}

// pagination interface input
@InputType()
export class PaginationInterfaceInput {
  @ValidateIf((o) => o.search)
  @IsString({ message: 'Search must be string' })
  @Field({ nullable: true })
  search?: string;

  @ValidateNested()
  @Type(() => PaginationCommon)
  @IsNotEmpty({ message: 'Pagination is required' })
  @Field(() => PaginationCommon)
  pagination: PaginationCommon;
}

// pagination interface entity
@ObjectType()
export class PaginationInterfaceEntity {
  @Field()
  readonly sort: string;

  @Field()
  readonly order: string;

  @Field(() => Int)
  readonly take: number;

  @Field(() => Int)
  readonly page: number;

  @Field(() => Int)
  readonly pages: number;

  @Field(() => Int)
  readonly total: number;
}
