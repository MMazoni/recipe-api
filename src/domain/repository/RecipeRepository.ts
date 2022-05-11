import { Recipe } from '../entity/recipe/Recipe';

export default interface RecipeRepository {
  add(input: Recipe): Promise<void>;
  getAll(): Promise<Recipe[]>;
}
