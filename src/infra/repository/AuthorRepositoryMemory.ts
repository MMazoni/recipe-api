import { Author } from '../../domain/entity/author/Author';
import AuthorRepository from '../../domain/repository/AuthorRepository';

export default class AuthorRepositoryMemory implements AuthorRepository {
  authors: Author[];

  constructor() {
    this.authors = [
      {
        id: '7757b9da-51b1-4586-8751-7dc2dafbc04a',
        name: 'Mazoni',
        recipes: [],
      },
      { id: '2', name: 'Miki', recipes: [] },
    ];
  }
  async get(id: string): Promise<Author> {
    const author = this.authors.find((author) => author.id == id);
    if (!author) throw new Error('Author not found.');
    return author;
  }
}
