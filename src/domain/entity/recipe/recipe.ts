import { Author } from '../author/author';
import { Category } from '../category/category';

export class Recipe {
  readonly author: Author;
  readonly category: Category;

  constructor(
    readonly title: string,
    readonly ingredients: string[],
    readonly ingredientsAmount: string[],
    readonly preparationMinutes: number,
    readonly servings: number,
    readonly directions: string[],
    authorName: string,
    categoryName: string,
  ) {
    this.author = new Author('', authorName);
    this.category = new Category('', categoryName);
  }
}

export type IngredientAmount = { amount: number; unitOfMeasurement: string };
