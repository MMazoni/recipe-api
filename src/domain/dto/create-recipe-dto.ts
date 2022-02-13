import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsArray()
  @IsNotEmpty()
  ingredients: Array<string>;

  @IsArray()
  @IsNotEmpty()
  ingredientsAmount: Array<string>;

  @IsInt()
  @IsNotEmpty()
  preparationMinutes: number;

  @IsInt()
  @IsNotEmpty()
  servings: number;

  @IsNotEmpty()
  authorId: any;

  @IsArray()
  @IsNotEmpty()
  directions: Array<string>;

  @IsNotEmpty()
  categoryId: any;
}
