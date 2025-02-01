import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// prisma service
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // connect
  async onModuleInit() {
    await this.$connect();
  }
}
