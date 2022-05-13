import { Recipe } from '../../domain/entity/recipe/Recipe';
import RecipeRepository from '../../domain/repository/RecipeRepository';

export default class RecipeRepositoryMemory implements RecipeRepository {
  recipes: Recipe[];

  constructor() {
    this.recipes = [];
  }
  getAll(): Promise<Recipe[]> {
    throw new Error('Method not implemented.');
  }

  async add(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe);
  }
}
