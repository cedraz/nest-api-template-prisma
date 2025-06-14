/*
  Warnings:

  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `password_hash` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "password_hash" SET NOT NULL;

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");
