import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // category
  const category = await prisma.category.create({
    data: { name: 'Massa' },
  });

  // author
  const author = await prisma.author.create({
    data: { name: 'Mazoni' },
  });
  const ingredientsAmount = [
    { amount: 500, unitOfMeasurement: 'g' },
    { amount: 1, unitOfMeasurement: 'kg' },
    { amount: 1, unitOfMeasurement: null },
    { amount: 45, unitOfMeasurement: 'g' },
    { amount: 30, unitOfMeasurement: 'g' },
  ] as Prisma.JsonArray;

  // recipe
  const recipe = {
    title: 'Nhoque ao molho de manteiga com ervas finas',
    ingredients: [
      'Farinha de Trigo',
      'Batata',
      'Ovo',
      'Manteiga',
      'Ervas Finas',
    ],
    ingredientsAmount: ingredientsAmount,
    author_id: author.id,
    preparationMinutes: 35,
    servings: 4,
    category_id: category.id,
  };
  await prisma.recipe.create({
    data: recipe,
  });
  console.log('Seeding...');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
