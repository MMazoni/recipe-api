import { SubmitRecipeInput } from '../../application/use-case/submit-recipe/SubmitRecipeInput';

export default interface RecipeRepository {
  add(input: SubmitRecipeInput): Promise<void>;
}
