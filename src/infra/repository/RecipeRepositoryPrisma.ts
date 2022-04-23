import { Injectable } from '@nestjs/common';
import { RecipeDto } from 'src/use-cases/ports/recipe.dto';
import RecipeRepository from '../../domain/repository/recipe-repository';
import { PrismaService } from '../database/prisma/PrismaService';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async get(id: string): Promise<Recipe> {
    return await this.prisma.recipe.findUnique({
      where: {
        id: id,
      },
    });
  }

  async add(recipe: Recipe): Promise<void> {
    await this.prisma.recipe.create({
      data: {
        title: recipe.title,
        ingredients: recipe.ingredients.join(),
        ingredientsAmount: recipe.ingredientsAmount.join(),
        preparationMinutes: recipe.preparationMinutes,
        servings: recipe.servings,
        author_id: recipe.author_id,
        directions: recipe.directions.join(),
        category_id: recipe.category_id,
      },
    });
  }

  async getAll(): Promise<RecipeDto[]> {
    return await this.prisma.recipe.findMany();
  }
}
