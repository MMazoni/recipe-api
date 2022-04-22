import { IngredientAmount, Recipe } from '../../../domain/entity/recipe/recipe';
import RecipeRepository from '../../../domain/repository/recipe-repository';
import AuthorRepositoryMemory from '../../../infra/repository/author-repository-memory';
import CategoryRepositoryMemory from '../../../infra/repository/category-repository-memory';

export default class SubmitRecipe {
  constructor(readonly recipeRepository: RecipeRepository) {}

  async execute(input: SubmitRecipeInput): Promise<SubmitRecipeOutput> {
    const authorRepository = new AuthorRepositoryMemory();
    const author = await authorRepository.get(input.authorId);
    const categoryRepository = new CategoryRepositoryMemory();
    const category = await categoryRepository.get(input.categoryId);
    const recipeInput: Recipe = {
      id: 1,
      title: input.title,
      author: author,
      category: category,
      ingredients: input.ingredients,
      ingredientsAmount: input.ingredientsAmount,
      preparationMinutes: input.preparationMinutes,
      servings: input.servings,
      directions: input.directions,
    };
    const recipeId = await this.recipeRepository.add(recipeInput);
    if (recipeId)
      return {
        id: recipeId,
        message: 'Receita criada com sucesso',
      };
  }
}

export type SubmitRecipeInput = {
  title: string;
  ingredients: string[];
  ingredientsAmount: IngredientAmount[];
  preparationMinutes: number;
  servings: number;
  directions: string[];
  authorId: number | string;
  categoryId: number | string;
};

type SubmitRecipeOutput = {
  id: number | string;
  message: string;
};
