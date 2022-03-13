import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  getRecipe(): string {
    return 'Recipe should be here!';
  }
}
