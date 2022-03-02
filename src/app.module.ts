import { Module } from '@nestjs/common';
import { RecipeServicesModule } from './application/recipe/recipe-service.module';
import { PrismaModule } from './infrastructure/prisma';
import { RecipeController } from './infrastructure/recipe-controller';

@Module({
  imports: [PrismaModule, RecipeServicesModule],
  controllers: [RecipeController],
  providers: [],
})
export class AppModule {}
