/*
  Warnings:

  - Changed the type of `ingredientsAmount` on the `recipes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "recipes" DROP COLUMN "ingredientsAmount",
ADD COLUMN     "ingredientsAmount" JSONB NOT NULL;
