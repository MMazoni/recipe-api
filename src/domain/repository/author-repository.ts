import { Author } from '../entity/author/author';

export default interface AuthorRepository {
  get(id: number | string): Promise<Author>;
}
