import { Author } from './author';
import { Category } from './category';

export class Recipe {
  title: string;

  ingredients: Array<string>;

  ingredientsAmount: Array<string>;

  preparationMinutes: number;

  servings: number;

  author: Author;

  directions: Array<string>;

  category: Category;
}
