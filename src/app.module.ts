import { Module } from '@nestjs/common';
import { PrismaModule } from './external/modules/prisma.module';
import { RecipeModule } from './external/modules/recipe.module';

@Module({
  imports: [RecipeModule, PrismaModule],
})
export class AppModule {}
