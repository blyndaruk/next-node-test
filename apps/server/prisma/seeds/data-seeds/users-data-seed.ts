import * as bcrypt from 'bcryptjs'

export const usersDataSeed = async (): Promise<any[]> => {
  return [
    {
      email: 'root@root.com',
      password: await bcrypt.hash('password', 10),
      firstname: 'Root',
      lastname: 'User',
      role: 'ROOT',
    },
    {
      email: 'admin@admin.com',
      password: await bcrypt.hash('password', 10),
      firstname: 'Admin',
      lastname: 'User',
      role: 'ADMIN',
    },
  ]
}
