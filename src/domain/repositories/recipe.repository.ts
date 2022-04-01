import { Recipe } from '@prisma/client';
//@TODO - This Recipe should be the entity one, not the Prisma

export interface RecipeRepository {
  create(r: Recipe): Promise<Recipe>;
  getAll(): Promise<Recipe[]>;
}
