import { Recipe } from '@prisma/client';

export class RecipeDto implements Recipe {
  id: number;
  title: string;
  ingredients: string[];
  ingredientsAmount: string[];
  preparationMinutes: number;
  servings: number;
  authorId: number;
  directions: string[];
  categoryId: number;
}
