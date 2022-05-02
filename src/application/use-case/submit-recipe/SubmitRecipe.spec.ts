import SubmitRecipe from './SubmitRecipe';
import RecipeRepositoryMemory from '../../../infra/repository/RecipeRepositoryMemory';

test('an author should submit a recipe', async function () {
  const recipeRepository = new RecipeRepositoryMemory();
  const submitRecipe = new SubmitRecipe(recipeRepository);
  const input = {
    title: 'Nhoque de Batata',
    ingredients: ['batata', 'farinha de trigo', 'ovo'],
    ingredientsAmount: [
      { amount: 1, unitOfMeasurement: 'kg' },
      { amount: 0.5, unitOfMeasurement: 'kg' },
      { amount: 1, unitOfMeasurement: 'unit' },
    ],
    preparationMinutes: 20,
    servings: 4,
    directions: [
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
    authorId: 1,
    categoryId: 1,
  };

  const output = await submitRecipe.execute(input);
  expect(output.message).toBe('Receita criada com sucesso');
});