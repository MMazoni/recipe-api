import { ICrmService } from 'src/domain/abstracts/crm-services-abstract';
import { IDataService } from 'src/domain/abstracts/data-services-abstract';
import { Recipe } from 'src/domain/entities';

export class RecipeServices {
  constructor(
    private dataServices: IDataService,
    private crmServices: ICrmService,
  ) {}

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    try {
      const createdRecipe = await this.dataServices.recipes.create(recipe);
      await this.crmServices.recipeAdded(createdRecipe);

      return createdRecipe;
    } catch (error) {
      throw error;
    }
  }
}
