/*
  Warnings:

  - You are about to drop the column `userId` on the `stream` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,streamId]` on the table `upvote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addedById` to the `stream` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spaceId` to the `stream` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."stream" DROP CONSTRAINT "stream_userId_fkey";

-- AlterTable
ALTER TABLE "public"."stream" DROP COLUMN "userId",
ADD COLUMN     "addedById" TEXT NOT NULL,
ADD COLUMN     "spaceId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."space" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "space_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "upvote_userId_streamId_key" ON "public"."upvote"("userId", "streamId");

-- AddForeignKey
ALTER TABLE "public"."space" ADD CONSTRAINT "space_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."stream" ADD CONSTRAINT "stream_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "public"."space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."stream" ADD CONSTRAINT "stream_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
