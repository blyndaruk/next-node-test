import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcryptjs';

@Injectable()
export class PasswordService {
  // compare password
  async comparePassword(setPassword: string, savedPassword: string) {
    return compareSync(setPassword, savedPassword);
  }

  // hash password
  async hashPassword(setPassword: string) {
    return hashSync(setPassword, 10);
  }
}
