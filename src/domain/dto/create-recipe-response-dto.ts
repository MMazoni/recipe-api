import { Recipe } from '../entities';

export class CreateRecipeResponseDto {
  success: boolean;

  createdRecipe: Recipe;
}
