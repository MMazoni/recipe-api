export interface SubmitRecipeInput {
  title: string;
  ingredients: string[];
  ingredientsAmount: string[];
  preparationMinutes: number;
  servings: number;
  directions: string[];
  authorId: string;
  categoryId: string;
}
