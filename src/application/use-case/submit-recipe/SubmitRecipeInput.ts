export interface SubmitRecipeInput {
  title: string;
  ingredients: string[];
  ingredientsAmount: IngredientsAmount[];
  preparationMinutes: number;
  servings: number;
  directions: string[];
  authorId: string;
  categoryId: string;
}

export type IngredientsAmount = {
  amount: number;
  unitOfMeasurement: string | null;
};
