import { Category } from '../entity/category/Category';

export default interface CategoryRepository {
  get(id: number | string): Promise<Category>;
}
