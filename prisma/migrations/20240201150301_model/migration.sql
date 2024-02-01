/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crypto" (
    "id" TEXT NOT NULL,
    "baseUnit" TEXT NOT NULL,
    "quoteUnit" TEXT NOT NULL,
    "low" DOUBLE PRECISION NOT NULL,
    "high" DOUBLE PRECISION NOT NULL,
    "last" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "open" TEXT NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "sell" DOUBLE PRECISION NOT NULL,
    "buy" DOUBLE PRECISION NOT NULL,
    "at" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "crypto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "crypto" ADD CONSTRAINT "crypto_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
