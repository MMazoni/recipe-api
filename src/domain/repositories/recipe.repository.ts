import { Recipe } from '../entities/recipe';

export interface RecipeRepository {
  create(r: Recipe): boolean;
  get(): Recipe;
}
