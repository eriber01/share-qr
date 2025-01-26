/*
  Warnings:

  - The `id` column on the `UserEmails` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[emailId]` on the table `UserEmails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailId` to the `UserEmails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserEmails_id_key";

-- AlterTable
ALTER TABLE "UserEmails" ADD COLUMN     "emailId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserEmails_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmails_emailId_key" ON "UserEmails"("emailId");
