import { Recipe } from './recipe';

export class Author {
  constructor(public name: string, public recipe: Recipe[]) {}
}
