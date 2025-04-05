/*
  Warnings:

  - A unique constraint covering the columns `[urlId]` on the table `Shares` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `urlId` to the `Shares` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shares" ADD COLUMN     "urlId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Shares_urlId_key" ON "Shares"("urlId");
