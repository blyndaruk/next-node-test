import { PrismaClient } from '@prisma/client'

import { usersDataSeed } from './data-seeds'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.$transaction([prisma.user.deleteMany()])

  const newUsers = await usersDataSeed()

  await prisma.$transaction([prisma.user.createMany({ data: newUsers })])
}

main()
  .catch((error) => {
    console.log('seeds error: -----', error)
  })
  .finally(async () => await prisma.$disconnect())
