import { Recipe } from '../../../domain/entity/recipe/recipe';
import RecipeRepository from '../../../domain/repository/recipe-repository';
import AuthorRepositoryMemory from '../../../infra/repository/author-repository-memory';
import CategoryRepositoryMemory from '../../../infra/repository/category-repository-memory';
import { SubmitRecipeInput } from './SubmitRecipeInput';

export default class SubmitRecipe {
  constructor(readonly recipeRepository: RecipeRepository) {}

  async execute(input: SubmitRecipeInput): Promise<void> {
    const authorRepository = new AuthorRepositoryMemory();
    const author = await authorRepository.get(input.authorId);
    const categoryRepository = new CategoryRepositoryMemory();
    const category = await categoryRepository.get(input.categoryId);
    // const recipeInput: Recipe = {
    //   title: input.title,
    //   author: author,
    //   category: category,
    //   ingredients: input.ingredients,
    //   ingredientsAmount: input.ingredientsAmount,
    //   preparationMinutes: input.preparationMinutes,
    //   servings: input.servings,
    //   directions: input.directions,
    // };
    await this.recipeRepository.add(input);
  }
}

type SubmitRecipeOutput = {
  id: number | string;
  message: string;
};
