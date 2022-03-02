import { Body, Controller, Post } from '@nestjs/common';
import { RecipeServices } from 'src/application/recipe/add-recipe-service';
import { RecipeFactoryService } from 'src/application/recipe/recipe-factory-service';
import { CreateRecipeDto } from 'src/domain/dto/create-recipe-dto';
import { CreateRecipeResponseDto } from 'src/domain/dto/create-recipe-response-dto';

@Controller('api/recipe')
export class RecipeController {
  constructor(
    private recipeServices: RecipeServices,
    private recipeFactoryService: RecipeFactoryService,
  ) {}

  @Post()
  async createRecipe(@Body() recipeDto: CreateRecipeDto) {
    const createRecipeResponse = new CreateRecipeResponseDto();
    try {
      const recipe = this.recipeFactoryService.createNewRecipe(recipeDto);
      const createdRecipe = await this.recipeServices.createRecipe(recipe);

      createRecipeResponse.success = true;
      createRecipeResponse.createdRecipe = createdRecipe;
    } catch (error) {
      console.log('Something went wrong saving the recipe.');
      createRecipeResponse.success = false;
    }
    return createRecipeResponse;
  }
}
