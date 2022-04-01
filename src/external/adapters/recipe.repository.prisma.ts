import { Injectable } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipeRepository } from 'src/domain/repositories/recipe.repository';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async create(r: Recipe): Promise<Recipe> {
    return await this.prisma.recipe.create({
      data: {
        title: r.title,
        ingredients: r.ingredients.join(),
        ingredientsAmount: r.ingredientsAmount.join(),
        preparationMinutes: r.preparationMinutes,
        servings: r.servings,
        author: {
          create: {
            name: 'Jack Johnson',
          },
        },
        directions: r.directions.join(),
        category: {
          create: {
            name: 'Mingau',
          },
        },
      },
    });
  }
  async getAll() {
    return await this.prisma.recipe.findMany();
  }
}
