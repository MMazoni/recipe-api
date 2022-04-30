import { Category } from '../../domain/entity/category/Category';
import CategoryRepository from '../../domain/repository/CategoryRepository';

export default class CategoryRepositoryMemory implements CategoryRepository {
  category: Category[];

  constructor() {
    this.category = [
      { id: '1', name: 'Massa' },
      { id: '2', name: 'Frutos do mar' },
    ];
  }
  async get(id: string): Promise<Category> {
    const category = this.category.find((category) => category.id == id);
    if (!category) throw new Error('Category not found.');
    return category;
  }
}
