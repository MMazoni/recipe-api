import { Recipe } from '../../domain/entity/recipe';
import RecipeRepository from '../../domain/repository/recipe-repository';

export default class RecipeRepositoryMemory implements RecipeRepository {
  recipes: Recipe[];

  constructor() {
    this.recipes = [];
  }

  async add(recipe: Recipe): Promise<number | string> {
    this.recipes.push(recipe);
    return recipe.id;
  }
}
