import { Test } from '@nestjs/testing';
// import something from prisma
import { ApiModule } from '../../src/adapter/api/api.module';
import * as request from 'supertest';
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
  });

  afterAll(async () => {
    await app.close();
    // remove all data
    // close the DB connection
  });

  beforeEach(async () => {
    const prisma = new PrismaClient();
    // category
    await prisma.category.create({
      data: { id: 'd8958861-1d41-4c2d-941a-afcdb1fa0489', name: 'Massa' },
    });

    // author
    await prisma.author.create({
      data: { id: '7757b9da-51b1-4586-8751-7dc2dafbc04a', name: 'Mazoni' },
    });
  });

  it('POST /recipes', async () => {
    const createRecipeRequest = recipeStub();
    const response = await request(httpServer)
      .post('/recipes')
      .send(createRecipeRequest);
    expect(response.status).toBe(201);
    //expect(response.body).toMatchObject(createRecipeRequest);

    // get recipe and compare with the recipe request
  });
});
