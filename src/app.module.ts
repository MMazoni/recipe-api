import { Module } from '@nestjs/common';
import { RecipeModule } from './external/modules/recipe.module';

@Module({
  imports: [RecipeModule],
})
export class AppModule {}
