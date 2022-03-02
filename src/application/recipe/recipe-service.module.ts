import { Module } from '@nestjs/common';
import { RecipeServices } from './add-recipe-service';
import { RecipeFactoryService } from './recipe-factory-service';

@Module({
  imports: [],
  providers: [RecipeServices, RecipeFactoryService],
  exports: [RecipeServices, RecipeFactoryService],
})
export class RecipeServicesModule {}
