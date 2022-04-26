import { Module } from '@nestjs/common';
import { RecipeController } from '../../controller/RecipeController';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [],
})
export class ApiModule {}
