import { Injectable } from '@nestjs/common';
import { RecipeDto } from '../ports/recipe.dto';
import { RecipeRepositoryPrisma } from '../repository/RecipeRepositoryPrisma';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepositoryPrisma) {}

  submitRecipe(createRecipeInput: Recipe): Promise<void> {
    return this.recipeRepository.add(createRecipeInput);
  }
}
