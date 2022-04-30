import { Author } from '../author/Author';
import { Category } from '../category/Category';

export class Recipe {
  private author: Author;
  private category: Category;

  constructor(
    readonly id: string | null,
    readonly title: string,
    readonly ingredients: string[],
    readonly ingredientsAmount: string[],
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
