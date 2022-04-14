import { Author } from '../../../src/domain/entity/author';
import { Category } from '../../../src/domain/entity/category';
import { Recipe } from '../../../src/domain/entity/recipe';

test('Should create a recipe', function () {
  const recipe = new Recipe(
    '',
    'Nhoque de Batata',
    ['batata', 'farinha de trigo', 'ovo'],
    [
      { amount: 1, unitOfMeasurement: 'kg' },
      { amount: 0.5, unitOfMeasurement: 'kg' },
      { amount: 1, unitOfMeasurement: 'unit' },
    ],
    20,
    4,
    [
      'Descasque e cozinhe as batatas, em água, até que estejam macias.',
      'Passe-as pelo espremedor ainda quentes.',
      'Vá acrescentando a farinha aos poucos e o sal, amasse bem.',
      'Coloque a massa sobre uma mesa enfarinhada e faça rolinhos.',
      'Corte cada rolinho em pedaços de mais ou menos 2 cm.',
      'Leve ao fogo, em uma panela com bastante água temperada com sal.',
      'Quando a água levantar fervura, vá colocando os nhoques, até eles começarem a subir.',
      'Coloque água fria em uma bacia com um escorredor dentro, retire os nhoques já cozidos e coloque-os no escorredor para dar choque térmico.',
      'Repita o processo até toda massa estar cozida.',
      'Escorra bem e coloque o nhoque em um refratário, reserve.',
    ],
    'Mazoni',
    'Massas',
  );
  expect(recipe.title).toBe('Nhoque de Batata');
  expect(recipe.author).toBeInstanceOf(Author);
  expect(recipe.category).toBeInstanceOf(Category);
  expect(recipe.preparationMinutes).toBe(20);
  expect(recipe.servings).toBe(4);
  expect(recipe.ingredients[2]).toBe('ovo');
});
