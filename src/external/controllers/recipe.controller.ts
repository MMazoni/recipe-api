import { Controller, Get, Param } from '@nestjs/common';
import { RecipeDto } from 'src/use-cases/ports/recipe.dto';
import { RecipeService } from '../../use-cases/services/recipe.service';

@Controller('api/recipe/')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get(':id')
  getRecipe(@Param() params): Promise<RecipeDto> {
    return this.recipeService.getRecipe(params.id);
  }
}
