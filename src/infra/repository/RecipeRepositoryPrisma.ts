import { Injectable } from '@nestjs/common';
import RecipeRepository from '../../domain/repository/RecipeRepository';
import { PrismaService } from '../database/prisma/PrismaService';
import { Recipe } from '../../domain/entity/recipe/Recipe';
import { IngredientsAmount } from '../../application/use-case/submit-recipe/SubmitRecipeInput';

@Injectable()
export class RecipeRepositoryPrisma implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async add(recipe: Recipe): Promise<void> {
    console.log(JSON.stringify(recipe.getAuthor().id));
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
      const recipe = new Recipe(
        null,
        prismaRecipe.title,
        prismaRecipe.ingredients,
        JSON.parse(prismaRecipe.ingredientsAmount),
        prismaRecipe.preparationMinutes,
        prismaRecipe.servings,
        prismaRecipe.directions,
      );
    });
    return;
  }
}
