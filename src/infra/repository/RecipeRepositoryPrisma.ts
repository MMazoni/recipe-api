import { Injectable } from '@nestjs/common';
import RecipeRepository from '../../domain/repository/recipe-repository';
import { PrismaService } from '../database/prisma/PrismaService';
import { SubmitRecipeInput } from '../../application/use-case/submit-recipe/SubmitRecipeInput';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async add(recipe: SubmitRecipeInput): Promise<void> {
    await this.prisma.recipe.create({
      data: {
        title: recipe.title,
        ingredients: recipe.ingredients,
        ingredientsAmount: recipe.ingredientsAmount,
        preparationMinutes: recipe.preparationMinutes,
        servings: recipe.servings,
        author_id: recipe.authorId,
        directions: recipe.directions,
        category_id: recipe.categoryId,
      },
    });
  }
}
