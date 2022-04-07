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
