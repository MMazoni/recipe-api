import RecipeRepository from '../../../domain/repository/RecipeRepository';

export default class ObtainAllRecipes {
  constructor(readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<any> {}
}
