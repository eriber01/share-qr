-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
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
    "emailSend" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isEnd" BOOLEAN NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "codeAccess" TEXT NOT NULL,
    "isAccessForCode" TEXT NOT NULL,
    "codeQr" TEXT NOT NULL,
    "isOneView" BOOLEAN NOT NULL,
    "isView" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharesData" (
    "id" SERIAL NOT NULL,
    "sharesId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SharesData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmails_id_key" ON "UserEmails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SharesData_sharesId_key" ON "SharesData"("sharesId");

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shares" ADD CONSTRAINT "Shares_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharesData" ADD CONSTRAINT "SharesData_sharesId_fkey" FOREIGN KEY ("sharesId") REFERENCES "Shares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
