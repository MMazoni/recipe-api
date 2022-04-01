import { Injectable } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipeRepositoryPrisma } from 'src/external/adapters/recipe.repository.prisma';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepositoryPrisma) {}

  getRecipe(): Promise<Recipe[]> {
    const recipes = this.recipeRepository.getAll();
    return recipes;
  }
}
