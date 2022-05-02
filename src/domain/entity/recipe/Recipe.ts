import { Author } from '../author/Author';
import { Category } from '../category/Category';
import { IngredientsAmount } from '../../../application/use-case/submit-recipe/SubmitRecipeInput';

export class Recipe {
  private author: Author;
  private category: Category;

  constructor(
    readonly id: string | null,
    readonly title: string,
    readonly ingredients: string[],
    readonly ingredientsAmount: IngredientsAmount[],
    readonly preparationMinutes: number,
    readonly servings: number,
    readonly directions: string[],
  ) {}

  getAuthor(): Author {
    return this.author;
  }

  setAuthor(author: Author) {
    this.author = author;
  }

  getCategory(): Category {
    return this.category;
  }

  setCategory(category) {
    this.category = category;
  }
}
