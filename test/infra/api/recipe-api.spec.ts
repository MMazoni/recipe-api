import { Test } from '@nestjs/testing';
// import something from prisma
import { AppModule } from '../../../src/app.module';
import request from 'supertest';
import recipeStub from '../../stubs/recipeStub';

describe('Recipe API', () => {
  let app: any;
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    const app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    // remove all data
    // close the DB connection
  });

  describe('Create a recipe', async () => {
    const createRecipeRequest = { recipeStub };
    const response = await request(httpServer)
      .post('/recipes')
      .send(createRecipeRequest);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(createRecipeRequest);

    // get recipe and compare with the recipe request
  });
});
