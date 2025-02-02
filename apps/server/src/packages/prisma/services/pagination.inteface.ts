import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateIf, ValidateNested } from 'class-validator';

@InputType()
export class PaginationCommon {
  @IsNotEmpty()
  @Field(() => Int)
  readonly take: number;

  @IsNotEmpty()
  @Field(() => Int)
  readonly page: number;

  @IsNotEmpty()
  @Field()
  readonly sort: string;

  @IsNotEmpty()
  @Field()
  readonly order: string;
}

@InputType()
export class PaginationInterfaceInput {
  @ValidateIf((o) => (o as { search: boolean }).search)
  @IsString({ message: 'Search must be string' })
  @Field({ nullable: true })
  search?: string;

  @ValidateNested()
  @Type(() => PaginationCommon)
  @IsNotEmpty()
  @Field(() => PaginationCommon)
  pagination: PaginationCommon;
}

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
