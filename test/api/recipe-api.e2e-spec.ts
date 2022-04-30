import { Test } from '@nestjs/testing';
// import something from prisma
import { ApiModule } from '../../src/adapter/api/api.module';
import * as request from 'supertest';
import { recipeStub } from '../stubs/recipeStub';
import { INestApplication } from '@nestjs/common';

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

  it('POST /recipes', async () => {
    const createRecipeRequest = recipeStub();
    const response = await request(httpServer)
      .post('/recipes')
      .send(createRecipeRequest);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(createRecipeRequest);

    // get recipe and compare with the recipe request
  });
});
