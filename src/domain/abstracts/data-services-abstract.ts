import { Author, Category, Recipe, User } from '../entities';
import { IGenericRepository } from './generic-repository-abstract';

export abstract class IDataService {
  abstract recipes: IGenericRepository<Recipe>;

  abstract authors: IGenericRepository<Author>;

  abstract users: IGenericRepository<User>;

  abstract categories: IGenericRepository<Category>;
}
