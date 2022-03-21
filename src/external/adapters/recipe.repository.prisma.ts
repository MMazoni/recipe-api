import { Injectable } from '@nestjs/common';
import { Recipe } from 'src/domain/entities/recipe';
import { RecipeRepository } from 'src/domain/repositories/recipe.repository';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  create(r: Recipe): void {
    this.prisma.recipe.create({
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
  get(): Recipe {
    throw new Error('Method not implemented.');
  }
}
