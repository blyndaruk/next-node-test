import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateEarthquakeInput } from '@/app/modules/earthquakes/dto/create-earthquake.input';
import { FindEarthquakesInput } from '@/app/modules/earthquakes/dto/find-earthquakes.input';
import { MessageInterfaceEntity } from '@/app/repositories/common';
import { CustomLoggerService } from '@/packages/custom-logger';
import { PrismaService } from '@/packages/prisma/prisma.service';
import {
  createPaginatedResponse,
  getPrismaPagination,
} from '@/packages/prisma/services/prisma-pagination.service';

@Injectable()
export class EarthquakesService {
  private readonly loggerService = new CustomLoggerService();

  constructor(private readonly prismaService: PrismaService) {
    if (!this.prismaService) {
      this.loggerService.error(
        'PrismaService is undefined in EarthquakesService constructor',
        'EarthquakesService',
      );
    }
  }

  async findMany(
    input: FindEarthquakesInput,
    fields: { data: { select: Prisma.EarthquakeSelect } },
  ): Promise<any> {
    try {
      const where: Prisma.EarthquakeWhereInput = {
        OR: [{ location: { contains: input.search || '', mode: 'insensitive' } }],
      };

      const { orderBy, take, skip } = getPrismaPagination(input.pagination);

      this.loggerService.log(
        `Executing findMany with where: ${JSON.stringify(where)}, take: ${take}, skip: ${skip}, orderBy: ${JSON.stringify(orderBy)}`,
        'EarthquakesService.findMany',
      );

      const [data, total] = await this.prismaService.$transaction([
        this.prismaService.earthquake.findMany({
          where,
          select: fields.data.select,
          take,
          skip,
          orderBy,
        }),
        this.prismaService.earthquake.count({ where }),
      ]);

      return createPaginatedResponse({
        data,
        total,
        pagination: input.pagination,
      });
    } catch (error: any) {
      this.loggerService.error(
        `Error in EarthquakesService.findMany: ${error.message}`,
        'EarthquakesService.findMany',
      );
      throw new InternalServerErrorException('Failed to fetch earthquakes');
    }
  }

  async create(input: CreateEarthquakeInput): Promise<MessageInterfaceEntity> {
    try {
      this.loggerService.log(
        `Creating earthquake with input: ${JSON.stringify(input)}`,
        'EarthquakesService.create',
      );

      const created = await this.prismaService.earthquake.create({
        data: input,
      });

      this.loggerService.log(
        `Earthquake created successfully: ${JSON.stringify(created)}`,
        'EarthquakesService.create',
      );
      return { message: 'Created earthquake' };
    } catch (error: any) {
      this.loggerService.error(
        `Error in EarthquakesService.create: ${error.message}`,
        'EarthquakesService.create',
      );
      throw new InternalServerErrorException('Failed to create earthquake');
    }
  }
}
