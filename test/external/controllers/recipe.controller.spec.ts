import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from '../../../src/external/controllers/recipe.controller';
import { RecipeService } from '../../../src/use-cases/services/recipe.service';

describe('RecipeController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [RecipeService],
    }).compile();
  });

  describe('getRecipe', () => {
    it('should return "Recipe should be here!"', () => {
      const recipeController = app.get<RecipeController>(RecipeController);
      expect(recipeController.getRecipe()).toBe('Recipe should be here!');
    });
  });
});
