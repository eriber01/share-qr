/*
  Warnings:

  - The `needCode` column on the `Shares` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Shares" ALTER COLUMN "endDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "codeAccess" DROP NOT NULL,
ALTER COLUMN "codeAccess" SET DEFAULT 'null',
ALTER COLUMN "isDue" SET DEFAULT false,
DROP COLUMN "needCode",
ADD COLUMN     "needCode" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "oneView" SET DEFAULT false;
