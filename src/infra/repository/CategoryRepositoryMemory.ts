import { Category } from '../../domain/entity/category/Category';
import CategoryRepository from '../../domain/repository/CategoryRepository';

export default class CategoryRepositoryMemory implements CategoryRepository {
  category: Category[];

  constructor() {
    this.category = [
      { id: 'd8958861-1d41-4c2d-941a-afcdb1fa0489', name: 'Massa' },
      { id: '2', name: 'Frutos do mar' },
    ];
  }
  async get(id: string): Promise<Category> {
    const category = this.category.find((category) => category.id == id);
    if (!category) throw new Error('Category not found.');
    return category;
  }
}
