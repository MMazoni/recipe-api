import { Recipe } from '../recipe/Recipe';

export class Author {
  constructor(
    readonly id: string | null,
    readonly name: string,
    readonly recipes?: Recipe[],
  ) {}
}
