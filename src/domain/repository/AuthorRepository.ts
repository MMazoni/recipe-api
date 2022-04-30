import { Author } from '../entity/author/Author';

export default interface AuthorRepository {
  get(id: number | string): Promise<Author>;
}
