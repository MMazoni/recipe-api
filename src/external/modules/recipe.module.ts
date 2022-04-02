import { Module } from '@nestjs/common';
import { RecipeController } from '../controllers/recipe.controller';
import { RecipeService } from 'src/use-cases/services/recipe.service';
import { RecipeRepositoryPrisma } from '../repositories/prisma/recipe.repository.prisma';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepositoryPrisma],
})
export class RecipeModule {}
