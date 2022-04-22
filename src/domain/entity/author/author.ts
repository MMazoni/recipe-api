import { Recipe } from '../recipe/recipe';

export class Author {
  constructor(
    readonly id: number | string,
    readonly name: string,
    readonly recipes: Recipe[] = [],
  ) {}
}
