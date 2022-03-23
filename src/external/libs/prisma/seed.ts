import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // category
  await prisma.category.createMany({
    data: [{ name: 'Massa' }, { name: 'Japonesa' }, { name: 'Doce' }],
  });

  // author
  await prisma.author.createMany({
    data: [{ name: 'Mazoni' }, { name: 'Miki' }],
  });

  // recipe
  const recipe: Prisma.RecipeCreateManyInput = {
    title: 'Nhoque ao molho de manteiga com ervas finas',
    ingredients: [
      'Farinha de Trigo',
      'Batata',
      'Ovo',
      'Manteiga',
      'Ervas Finas',
    ],
    ingredientsAmount: ['500g', '1kg', '1', '45g', '30g'],
    authorId: 1,
    preparationMinutes: 35,
    servings: 4,
    categoryId: 1,
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
