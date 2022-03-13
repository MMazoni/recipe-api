import { Controller, Get } from '@nestjs/common';
import { RecipeService } from '../../use-cases/services/recipe.service';

@Controller()
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getRecipe(): string {
    return this.recipeService.getRecipe();
  }
}