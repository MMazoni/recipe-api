import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { SubmitRecipeInput } from '../application/use-case/submit-recipe/SubmitRecipeInput';
import SubmitRecipe from '../application/use-case/submit-recipe/SubmitRecipe';
import { RecipeRepositoryPrisma } from '../infra/repository/RecipeRepositoryPrisma';
import { PrismaService } from '../infra/database/prisma/PrismaService';
import ObtainAllRecipes from '../application/use-case/obtain-all-recipes/ObtainAllRecipes';
import { Recipe } from '../domain/entity/recipe/Recipe';

@Controller('recipes')
export class RecipeController {
  private readonly recipeRepository: RecipeRepositoryPrisma;

  constructor(private readonly recipeService: PrismaService) {
    this.recipeRepository = new RecipeRepositoryPrisma(recipeService);
  }

  @Post()
  @HttpCode(201)
  createRecipe(@Body() submitRecipeInput: SubmitRecipeInput): Promise<void> {
    const submitRecipe = new SubmitRecipe(this.recipeRepository);
    return submitRecipe.execute(submitRecipeInput);
  }

  @Get()
  obtainAllRecipes(): Promise<Recipe[]> {
    const obtainAllRecipes = new ObtainAllRecipes(this.recipeRepository);
    return obtainAllRecipes.execute();
  }
}
