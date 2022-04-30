import { Module } from '@nestjs/common';
import { RecipeController } from '../../controller/RecipeController';
import { PrismaService } from '../../infra/database/prisma/PrismaService';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [PrismaService],
})
export class ApiModule {}
