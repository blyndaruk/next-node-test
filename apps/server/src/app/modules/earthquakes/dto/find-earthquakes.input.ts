import { InputType, PickType } from '@nestjs/graphql';

import { PaginationInterfaceInput } from '@/app/repositories/common';

@InputType()
export class FindEarthquakesInput extends PickType(PaginationInterfaceInput, [
  'search',
  'pagination',
]) {}
