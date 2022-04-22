import { Module } from '@nestjs/common';
import { RecipeController } from '../../infra/controller/recipe-controller';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [],
})
export class ApiModule {}
