import { Recipe } from './recipe';

export class Author {
  constructor(readonly name: string, readonly recipes: Recipe[] = []) {}
}
