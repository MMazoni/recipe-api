import { Injectable } from '@nestjs/common';
import { RecipeDto } from 'src/use-cases/ports/recipe.dto';
import { RecipeRepository } from 'src/use-cases/ports/recipe.repository';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async get(id: number): Promise<RecipeDto> {
    return await this.prisma.recipe.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async create(recipe: RecipeDto): Promise<void> {
    await this.prisma.recipe.create({
      data: {
        title: recipe.title,
        ingredients: recipe.ingredients.join(),
        ingredientsAmount: recipe.ingredientsAmount.join(),
        preparationMinutes: recipe.preparationMinutes,
        servings: recipe.servings,
        authorId: recipe.authorId,
        directions: recipe.directions.join(),
        categoryId: recipe.categoryId,
      },
    });
  }

  async getAll(): Promise<RecipeDto[]> {
    return await this.prisma.recipe.findMany();
  }
}
