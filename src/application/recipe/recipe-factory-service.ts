import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from 'src/domain/dto/create-recipe-dto';
import { Recipe } from 'src/domain/entities';

@Injectable()
export class RecipeFactoryService {
  createNewRecipe(createRecipeDto: CreateRecipeDto) {
    const newRecipe = new Recipe();
    newRecipe.title = createRecipeDto.title;
    newRecipe.ingredients = createRecipeDto.ingredients;
    newRecipe.ingredientsAmount = createRecipeDto.ingredientsAmount;
    newRecipe.preparationMinutes = createRecipeDto.preparationMinutes;
    newRecipe.servings = createRecipeDto.servings;
    newRecipe.author = createRecipeDto.authorId;
    newRecipe.directions = createRecipeDto.directions;
    newRecipe.category = createRecipeDto.categoryId;

    return newRecipe;
  }
}
