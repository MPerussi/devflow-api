import { PrismaClient } from "@prisma/client";

console.log("DATABASE:", process.env.DATABASE_URL);

export const prisma = new PrismaClient();