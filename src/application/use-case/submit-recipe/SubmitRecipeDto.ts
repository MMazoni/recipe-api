import { Recipe } from '@prisma/client';

export class SubmitRecipeDto implements Recipe {
  id: string;
  title: string;
  ingredients: string[];
  ingredientsAmount: string[];
  preparationMinutes: number;
  servings: number;
  author_id: string | null;
  directions: string[];
  category_id: string;
}
