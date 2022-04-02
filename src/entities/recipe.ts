import { Author } from './author';
import { Category } from './category';

export class Recipe {
  constructor(
    public title: string,

    public ingredients: Array<string>,

    public ingredientsAmount: Array<string>,

    public preparationMinutes: number,

    public ervings: number,

    public author: Author,

    public directions: Array<string>,

    public category: Category,
  ) {}
}
