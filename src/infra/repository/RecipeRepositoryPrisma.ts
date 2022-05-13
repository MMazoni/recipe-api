import { Injectable } from '@nestjs/common';
import RecipeRepository from '../../domain/repository/RecipeRepository';
import { PrismaService } from '../database/prisma/PrismaService';
import { Recipe } from '../../domain/entity/recipe/Recipe';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async add(recipe: Recipe): Promise<void> {
    await this.prisma.recipe.create({
      data: {
        title: recipe.title,
        ingredients: recipe.ingredients,
        ingredientsAmount: recipe.ingredientsAmount,
        preparationMinutes: recipe.preparationMinutes,
        servings: recipe.servings,
        author_id: recipe.getAuthor().id,
        directions: recipe.directions,
        category_id: recipe.getCategory().id,
      },
    });
  }

  async getAll(): Promise<Recipe[]> {
    const recipes = await this.prisma.recipe.findMany();
    recipes.map((prismaRecipe) => {
      const jsonArray = prismaRecipe.ingredientsAmount as Prisma.JsonArray;
      const ingredientAmount = [];
      jsonArray.forEach((ingAmount) => {
        ingAmount = ingAmount as string;
        ingredientAmount.push(JSON.parse(ingAmount));
      });
      return new Recipe(
        null,
        prismaRecipe.title,
        prismaRecipe.ingredients,
        ingredientAmount,
        prismaRecipe.preparationMinutes,
        prismaRecipe.servings,
        prismaRecipe.directions,
      );
    });
    return recipes;
  }
}
