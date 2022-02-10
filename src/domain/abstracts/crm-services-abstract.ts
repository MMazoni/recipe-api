import { Recipe } from '../entities';

export abstract class ICrmService {
  abstract recipeAdded(recipe: Recipe): Promise<boolean>;
}
