import { Field, InterfaceType, registerEnumType } from '@nestjs/graphql';
import { Prisma, Role } from '@prisma/client';
import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

import { MessageGraphqlService } from '@/packages/graphql/services';

// error message
const MessageService = new MessageGraphqlService();

// role enum
registerEnumType(Role, { name: 'Role' });

// user interface
@InterfaceType()
export class UserInterface implements Prisma.UserUncheckedCreateInput {
  @IsNotEmpty({ message: 'User id is required' })
  @Field()
  id: string;

  @Field()
  readonly created_at: Date;

  @Field()
  readonly updated_at: Date;

  @IsEmail({}, { message: MessageService.error('email', 'Incorrect email format') })
  @IsNotEmpty({ message: MessageService.error('email', 'Required') })
  @Field()
  readonly email: string;

  @IsNotEmpty({ message: MessageService.error('current_password', 'Required') })
  @Field()
  readonly current_password: string;

  @MinLength(6, { message: MessageService.error('password', 'Minimum 6 characters') })
  @MaxLength(40, { message: MessageService.error('password', 'Maximum 40 characters') })
  @IsNotEmpty({ message: MessageService.error('password', 'Required') })
  @Field()
  readonly password: string;

  @ValidateIf((o) => o.confirm_password && o.password !== o.confirm_password)
  @IsNotEmpty({ message: MessageService.error('confirm_password', 'Passwords do not match') })
  @IsEmpty({ message: MessageService.error('confirm_password', 'Passwords do not match') })
  @Field()
  confirm_password: string;

  @Length(2, 40, {
    message: MessageService.error('firstname', 'Minimum 2 characters, maximum 40'),
  })
  @IsNotEmpty({ message: MessageService.error('firstname', 'Required') })
  @Field()
  readonly firstname: string;

  @Length(2, 40, { message: MessageService.error('lastname', 'Minimum 2 characters, maximum 40') })
  @IsNotEmpty({ message: MessageService.error('lastname', 'Required') })
  @Field()
  readonly lastname: string;

  @IsOptional()
  @IsEnum(Role, { message: MessageService.error('role', 'Invalid role') })
  @Field(() => Role)
  readonly role: Role;
}
