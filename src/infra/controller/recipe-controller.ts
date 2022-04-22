import { Body, Controller, Post } from '@nestjs/common';

@Controller('recipes')
export class RecipeController {
  constructor(/**private readonly recipeService: RecipeService**/) {}

  @Post()
  createRecipe(@Body() createRecipeDto: any): void {
    // return this.recipeService.submitRecipe();
  }
}
