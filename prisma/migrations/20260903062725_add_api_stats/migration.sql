-- CreateTable
CREATE TABLE "ApiStats" (
    "id" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApiStats_pkey" PRIMARY KEY ("id")
);
