import { PrismaClient } from '@prisma/client';

import { earthquakesSeed, usersDataSeed } from './data-seeds';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$transaction([prisma.user.deleteMany()]);

  const newUsers = await usersDataSeed();
  const newEarthquakes = await earthquakesSeed();

  await prisma.$transaction([
    prisma.user.createMany({ data: newUsers }),
    prisma.earthquake.createMany({ data: newEarthquakes }),
  ]);
};

main()
  .catch((error) => {
    console.error('seeds error: -----', error);
  })
  .finally(async () => await prisma.$disconnect());
