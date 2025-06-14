import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: 'User One',
      email: 'user1@example.com',
      password: 'userpassword1',
    },
    {
      name: 'User Two',
      email: 'user2@example.com',
      password: 'userpassword2',
    },
  ];

  for (const user of users) {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(user.password, salt);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password_hash,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
