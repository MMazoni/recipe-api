import { Author } from './author';

test('should create an author without recipes', function () {
  const author = new Author('', 'Mazoni');

  expect(author).toBeInstanceOf(Author);
  expect(author.name).toBe('Mazoni');
  expect(author.recipes).toEqual([]);
  expect(author.recipes).toHaveLength(0);
});
