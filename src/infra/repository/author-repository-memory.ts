import { Author } from '../../domain/entity/author';
import AuthorRepository from '../../domain/repository/author-repository';

export default class AuthorRepositoryMemory implements AuthorRepository {
  authors: Author[];

  constructor() {
    this.authors = [
      { id: 1, name: 'Mazoni', recipes: [] },
      { id: 2, name: 'Miki', recipes: [] },
    ];
  }
  async get(id: string | number): Promise<Author> {
    const author = this.authors.find((author) => author.id == id);
    if (!author) throw new Error('Author not found.');
    return author;
  }
}
