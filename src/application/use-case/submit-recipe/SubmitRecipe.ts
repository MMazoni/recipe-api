import { Recipe } from '../../../domain/entity/recipe/Recipe';
import RecipeRepository from '../../../domain/repository/RecipeRepository';
import AuthorRepositoryMemory from '../../../infra/repository/AuthorRepositoryMemory';
import CategoryRepositoryMemory from '../../../infra/repository/CategoryRepositoryMemory';
import { SubmitRecipeInput } from './SubmitRecipeInput';

export default class SubmitRecipe {
  constructor(readonly recipeRepository: RecipeRepository) {}

  async execute(input: SubmitRecipeInput): Promise<void> {
    const authorRepository = new AuthorRepositoryMemory();
    const author = await authorRepository.get(input.authorId);
    const categoryRepository = new CategoryRepositoryMemory();
    const category = await categoryRepository.get(input.categoryId);

    const recipe = new Recipe(
      null,
      input.title,
      input.ingredients,
      input.ingredientsAmount,
      input.preparationMinutes,
      input.servings,
      input.directions,
    );
    recipe.setAuthor(author);
    recipe.setCategory(category);

    await this.recipeRepository.add(recipe);
  }
}
