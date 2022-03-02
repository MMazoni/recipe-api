import { Injectable } from '@nestjs/common';
import { IGenericRepository } from 'src/domain/abstracts/generic-repository-abstract';
import { PrismaService } from '../prisma';

@Injectable()
export class PrismaGenericRepository<T> implements IGenericRepository<T> {
  private model: string;

  constructor(private readonly prisma: PrismaService) {}

  setModel(model: string) {
    this.model = model;
  }

  getAll() {
    return this.prisma[this.model].findMany();
  }

  get(id: string) {
    return this.prisma[this.model].findUnique({
      where: {
        id: id,
      },
    });
  }
  create(item: T) {
    return this.prisma[this.model].create({
      data: item,
    });
  }
  update(id: string, item: T) {
    return this.prisma[this.model].update({
      data: item,
      where: {
        id: id,
      },
    });
  }
}
