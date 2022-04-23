import { IngredientAmount } from '../../../domain/entity/recipe/recipe';

export interface SubmitRecipeInput {
  title: string;
  ingredients: string[];
  ingredientsAmount: IngredientAmount[];
  preparationMinutes: number;
  servings: number;
  directions: string[];
  authorId: number | string;
  categoryId: number | string;
}
