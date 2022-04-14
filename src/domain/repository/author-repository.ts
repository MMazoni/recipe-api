import { Author } from '../entity/author';

export default interface AuthorRepository {
  get(id: number | string): Promise<Author>;
}
