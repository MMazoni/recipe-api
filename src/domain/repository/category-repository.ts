import { Category } from '../entity/category';

export default interface CategoryRepository {
  get(id: number | string): Promise<Category>;
}
