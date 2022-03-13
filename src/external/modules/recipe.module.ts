import { Module } from '@nestjs/common';
import { RecipeController } from '../controllers/recipe.controller';
import { RecipeService } from 'src/use-cases/services/recipe.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
