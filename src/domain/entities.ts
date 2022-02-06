export class Recipe {
  title: string;

  ingredients: Array<string>;

  ingredientsAmount: Array<string>;

  preparationMinutes: number;

  servings: number;

  author: Author;

  directions: Array<string>;

  category: Category;
}

export class Author {
  name: string;

  user: User;

  recipes: Array<Recipe>;
}

export class User {
  userName: string;

  password: string;

  email: string; //@TODO: turn into value object
}

export class Category {
  name: string;
}
