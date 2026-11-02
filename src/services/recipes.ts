import { api } from './api';

export type RecipeDifficulty = 'Easy' | 'Medium' | 'Hard';

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: RecipeDifficulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export type GetRecipesParams = {
  limit?: number;
  skip?: number;
};

export async function getRecipes(
  params: GetRecipesParams = {},
): Promise<RecipesResponse> {
  const { data } = await api.get<RecipesResponse>('/recipes', { params });

  return data;
}

export async function getRecipeById(id: number): Promise<Recipe> {
  const { data } = await api.get<Recipe>(`/recipes/${id}`);

  return data;
}

export async function getFavoritesRecipes(ids: number[]): Promise<Recipe[]> {
  return Promise.all(ids.map((id) => getRecipeById(id)));
}
