/*
  Warnings:

  - You are about to drop the `Screen` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "number" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Screen";
