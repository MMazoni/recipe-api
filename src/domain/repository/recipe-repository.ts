import { Recipe } from '../entity/recipe/recipe';

export default interface RecipeRepository {
  add(input: Recipe): Promise<number | string>;
}
