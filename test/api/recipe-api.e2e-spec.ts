import { Test } from '@nestjs/testing';
import { ApiModule } from '../../src/adapter/api/api.module';
import request from 'supertest';
import { recipeStub } from '../stubs/recipeStub';
import { INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

describe('Recipe API', () => {
  let app: INestApplication;
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();

    const prisma = new PrismaClient();
    // category
    await prisma.category.create({
      data: { id: 'd8958861-1d41-4c2d-941a-afcdb1fa0489', name: 'Massa' },
    });

    // author
    await prisma.author.create({
      data: { id: '7757b9da-51b1-4586-8751-7dc2dafbc04a', name: 'Mazoni' },
    });

    // recipe
    await prisma.recipe.create({
      data: {
        title: 'Carbonara',
        ingredients: ['macarrão', 'ovo', 'bacon', 'azeite'],
        ingredientsAmount: [
          { amount: 500, unitOfMeasurement: 'g' },
          { amount: 1, unitOfMeasurement: '' },
          { amount: 100, unitOfMeasurement: 'g' },
          { amount: 1, unitOfMeasurement: 'tsp' },
        ],
        preparationMinutes: 30,
        servings: 3,
        directions: [],
        author_id: '7757b9da-51b1-4586-8751-7dc2dafbc04a',
        category_id: 'd8958861-1d41-4c2d-941a-afcdb1fa0489',
      },
    });
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /recipes', async () => {
    const createRecipeRequest = recipeStub();
    const response = await request(httpServer)
      .post('/recipes')
      .send(createRecipeRequest);
    expect(response.status).toBe(201);
  });

  it('GET /recipes', async () => {
    const response = await request(httpServer).get('/recipes');
    expect(response.status).toBe(200);
  });
});
