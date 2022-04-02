import { RecipeDto } from './recipe.dto';

export interface RecipeRepository {
  create(recipe: RecipeDto): Promise<void>;
  getAll(): Promise<RecipeDto[]>;
  get(id: number): Promise<RecipeDto>;
}
