import { Injectable } from '@nestjs/common';
import RecipeRepository from '../../domain/repository/RecipeRepository';
import { PrismaService } from '../database/prisma/PrismaService';
import { Recipe } from '../../domain/entity/recipe/Recipe';
import { Prisma } from '@prisma/client';
import { Author } from '../../domain/entity/author/Author';
import { Category } from '../../domain/entity/category/Category';

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
    const recipes = await this.prisma.recipe.findMany({
      include: {
        author: {
          select: {
            name: true,
            recipes: true,
          },
        },
        category: {
          select: {
            name: true,
            recipes: true,
          },
        },
      },
    });
    recipes.map(async (prismaRecipe) => {
      const jsonArray = prismaRecipe.ingredientsAmount as Prisma.JsonArray;
      const ingredientAmount = [];
      jsonArray.forEach((ingAmount) => {
        ingAmount = ingAmount as string;
        ingredientAmount.push(JSON.parse(ingAmount));
      });
      const recipe = new Recipe(
        null,
        prismaRecipe.title,
        prismaRecipe.ingredients,
        ingredientAmount,
        prismaRecipe.preparationMinutes,
        prismaRecipe.servings,
        prismaRecipe.directions,
      );
      // TODO: missing third parameter(recipes)
      const author = new Author(
        prismaRecipe.author_id,
        prismaRecipe.author.name,
      );
      const category = new Category(
        prismaRecipe.category_id,
        prismaRecipe.category.name,
      );
      return recipe;
    });
    return recipes;
  }
}
