import { PrismaService } from '@/packages/prisma';

export class EarthquakesService {
  constructor(private readonly prismaService: PrismaService) {}
}
