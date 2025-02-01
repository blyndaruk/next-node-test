import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

// roles decorator
export const RoleDecorator = (roles: Role[]) => SetMetadata('roles', roles);
