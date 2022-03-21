/*
  Warnings:

  - You are about to drop the column `direction` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `directions` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "ingredientsAmount" TEXT NOT NULL,
    "preparationMinutes" INTEGER NOT NULL,
    "servings" INTEGER NOT NULL,
    "authorId" INTEGER,
    "directions" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Recipe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("authorId", "categoryId", "id", "ingredients", "ingredientsAmount", "preparationMinutes", "servings", "title") SELECT "authorId", "categoryId", "id", "ingredients", "ingredientsAmount", "preparationMinutes", "servings", "title" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_title_key" ON "Recipe"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
