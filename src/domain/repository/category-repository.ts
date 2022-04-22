import { Category } from '../entity/category/category';

export default interface CategoryRepository {
  get(id: number | string): Promise<Category>;
}
