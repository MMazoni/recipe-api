import { Category } from '../../../src/domain/entity/category';

test('should create a category', function () {
  const category = new Category('Massa');

  expect(category).toBeInstanceOf(Category);
  expect(category.name).toBe('Massa');
});
