-- CreateEnum
CREATE TYPE "public"."StreamType" AS ENUM ('Spotify', 'Youtube');

-- CreateTable
CREATE TABLE "public"."stream" (
    "id" TEXT NOT NULL,
    "type" "public"."StreamType" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "stream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."upvote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "streamId" TEXT NOT NULL,

    CONSTRAINT "upvote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."stream" ADD CONSTRAINT "stream_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."upvote" ADD CONSTRAINT "upvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."upvote" ADD CONSTRAINT "upvote_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "public"."stream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
