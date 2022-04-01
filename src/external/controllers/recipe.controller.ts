import { Controller, Get } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipeService } from '../../use-cases/services/recipe.service';

@Controller('api/recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getRecipe(): Promise<Recipe[]> {
    return this.recipeService.getRecipe();
  }
}
