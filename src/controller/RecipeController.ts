import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SubmitRecipeInput } from '../application/use-case/submit-recipe/SubmitRecipeInput';
import SubmitRecipe from '../application/use-case/submit-recipe/SubmitRecipe';
import { RecipeRepositoryPrisma } from '../infra/repository/RecipeRepositoryPrisma';
import { PrismaService } from '../infra/database/prisma/PrismaService';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: PrismaService) {}

  @Post()
  @HttpCode(201)
  createRecipe(@Body() submitRecipeInput: SubmitRecipeInput): Promise<void> {
    const recipeRepository = new RecipeRepositoryPrisma(this.recipeService);
    const submitRecipe = new SubmitRecipe(recipeRepository);
    return submitRecipe.execute(submitRecipeInput);
  }
}
