import { Recipe } from '../../../domain/entity/recipe/Recipe';
import RecipeRepository from '../../../domain/repository/RecipeRepository';

export default class ObtainAllRecipes {
  constructor(readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.getAll();
  }
}
