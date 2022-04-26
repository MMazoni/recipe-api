import { Recipe } from '../recipe/recipe';

export class Author {
  constructor(readonly name: string, readonly recipes: Recipe[] = []) {}
}
