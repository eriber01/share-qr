/*
  Warnings:

  - You are about to drop the column `codeQr` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `emailSend` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `isAccessForCode` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `isEnd` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `isOneView` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `isView` on the `Shares` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `SharesData` table. All the data in the column will be lost.
  - Added the required column `isDue` to the `Shares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needCode` to the `Shares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oneView` to the `Shares` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SharesData_sharesId_key";

-- AlterTable
ALTER TABLE "Shares" DROP COLUMN "codeQr",
DROP COLUMN "date",
DROP COLUMN "emailSend",
DROP COLUMN "isAccessForCode",
DROP COLUMN "isEnd",
DROP COLUMN "isOneView",
DROP COLUMN "isView",
ADD COLUMN     "isDue" BOOLEAN NOT NULL,
ADD COLUMN     "needCode" TEXT NOT NULL,
ADD COLUMN     "oneView" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "SharesData" DROP COLUMN "date";

-- CreateTable
CREATE TABLE "SharesEmails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sharesId" INTEGER NOT NULL,
    "isView" BOOLEAN NOT NULL,

    CONSTRAINT "SharesEmails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SharesEmails" ADD CONSTRAINT "SharesEmails_sharesId_fkey" FOREIGN KEY ("sharesId") REFERENCES "Shares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
