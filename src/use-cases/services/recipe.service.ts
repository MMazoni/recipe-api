import { Injectable } from '@nestjs/common';
import { RecipeRepositoryPrisma } from 'src/external/repositories/prisma/recipe.repository.prisma';
import { RecipeDto } from '../ports/recipe.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepositoryPrisma) {}

  getRecipe(id: string): Promise<RecipeDto> {
    return this.recipeRepository.get(id);
  }
}
