import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '..';

@Injectable()
export class RecipeRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.recipe.findMany();
  }

  findByUnique(input: Prisma.RecipeWhereUniqueInput) {
    return this.prisma.recipe.findUnique({
      where: input,
    });
  }
  create(input: Prisma.RecipeCreateInput) {
    return this.prisma.recipe.create({
      data: input,
    });
  }
  update(input: Prisma.RecipeUpdateInput, id: number) {
    return this.prisma.recipe.update({
      data: input,
      where: {
        id: id,
      },
    });
  }
}
