import { PrismaClient } from "../../generated/prisma";

const prismaObj = new PrismaClient();

try {
    await prismaObj.$executeRaw`SELECT 1+1 AS result`;
    console.log("[Prisma] Prisma Client initialized successfully.");
}
catch (error) {
    console.error("[Prisma] Error initializing Prisma Client:", error);
}

export default prismaObj;