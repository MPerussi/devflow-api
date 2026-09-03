import { prisma } from "../database/prisma";

async function main() {
  const stats = await prisma.apiStats.findFirst();

  if (!stats) {
    await prisma.apiStats.create({
      data: {
        visits: 0
      }
    });

    console.log("ApiStats criado!");
  } else {
    console.log("ApiStats já existe!");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());