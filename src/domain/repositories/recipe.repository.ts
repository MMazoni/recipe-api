import { Recipe } from '../entities/recipe';

export interface RecipeRepository {
  create(r: Recipe): void;
  get(): Recipe;
}
