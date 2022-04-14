import { Recipe } from '../entity/recipe';

export default interface RecipeRepository {
  add(input: Recipe): Promise<number | string>;
}
