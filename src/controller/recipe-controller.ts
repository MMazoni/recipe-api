import { Body, Controller, Post } from '@nestjs/common';
import { RecipeService } from '../infra/provider/recipe-service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  createRecipe(@Body() createRecipeInput: CreateRecipeInput): Promise<void> {
    return this.recipeService.submitRecipe(createRecipeInput);
  }
}
