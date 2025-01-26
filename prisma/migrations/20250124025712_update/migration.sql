-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT DEFAULT 'null',
    "enabled" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmails" (
    "id" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shares" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "isDue" BOOLEAN NOT NULL DEFAULT false,
    "endDate" DATE,
    "needCode" BOOLEAN NOT NULL DEFAULT false,
    "codeAccess" TEXT DEFAULT 'null',
    "oneView" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharesData" (
    "id" SERIAL NOT NULL,
    "sharesId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SharesData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharesEmails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sharesId" INTEGER NOT NULL,
    "isView" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SharesEmails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmails_id_key" ON "UserEmails"("id");

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shares" ADD CONSTRAINT "Shares_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharesData" ADD CONSTRAINT "SharesData_sharesId_fkey" FOREIGN KEY ("sharesId") REFERENCES "Shares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharesEmails" ADD CONSTRAINT "SharesEmails_sharesId_fkey" FOREIGN KEY ("sharesId") REFERENCES "Shares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
