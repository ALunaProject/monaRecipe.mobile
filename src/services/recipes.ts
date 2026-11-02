import { api } from './api';
import { CategoryItem, CategoryType } from "../components/Categories/types";

export type RecipeDifficulty = 'Easy' | 'Medium' | 'Hard';
const DIFFICULTY_ORDER: RecipeDifficulty[] = ['Easy', 'Medium', 'Hard'];
const TIME_LIMITS = [15, 30, 45, 60, 90];
export const CUISINE_FLAGS = {
  American: '🇺🇸',
  Asian: '🌏',
  Brazilian: '🇧🇷',
  Cocktail: '🍸',
  Greek: '🇬🇷',
  Hawaiian: '🌺',
  Indian: '🇮🇳',
  Italian: '🇮🇹',
  Japanese: '🇯🇵',
  Korean: '🇰🇷',
  Lebanese: '🇱🇧',
  Mediterranean: '🫒',
  Mexican: '🇲🇽',
  Moroccan: '🇲🇦',
  Pakistani: '🇵🇰',
  Russian: '🇷🇺',
  Smoothie: '🥤',
  Spanish: '🇪🇸',
  Thai: '🇹🇭',
  Turkish: '🇹🇷',
  Vietnamese: '🇻🇳',
} as const satisfies Record<string, string>;

export type RecipeCuisine = keyof typeof CUISINE_FLAGS;

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: RecipeDifficulty;
  cuisine: RecipeCuisine;
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

export function matchesCategory(
    recipe: Recipe,
    type: CategoryType,
    value: string | number,
): boolean {
  switch (type) {
    case 'cuisine':
      return recipe.cuisine === value;
    case 'difficulty':
      return recipe.difficulty === value;
    case 'time':
      return recipe.prepTimeMinutes + recipe.cookTimeMinutes <= Number(value);
    case 'servings':
      return recipe.servings === Number(value);
  }
}

export async function getRecipesByCategory(
    type: CategoryType,
    value: string | number,
): Promise<Recipe[]> {
  // limit: 0 faz o DummyJSON retornar todas as receitas
  const { recipes } = await getRecipes({ limit: 0 });

  return recipes.filter((recipe) => matchesCategory(recipe, type, value));
}

export async function getCategories(): Promise<CategoryItem[]> {
  const { recipes } = await getRecipes({ limit: 0 });

  const cuisines = [...new Set(recipes.map((r) => r.cuisine))].sort();

  const difficulties = DIFFICULTY_ORDER.filter((difficulty) =>
      recipes.some((r) => r.difficulty === difficulty),
  );

  const servings = [...new Set(recipes.map((r) => r.servings))].sort(
      (a, b) => a - b,
  );

  const times = TIME_LIMITS.filter((limit) =>
      recipes.some((r) => r.prepTimeMinutes + r.cookTimeMinutes <= limit),
  );

  return [
    ...cuisines.map((cuisine) => ({
      type: 'cuisine' as const,
      label: cuisine,
      value: cuisine,
      flag: CUISINE_FLAGS[cuisine],
    })),
    ...difficulties.map((difficulty) => ({
      type: 'difficulty' as const,
      label: difficulty,
      value: difficulty,
    })),
    ...times.map((limit) => ({
      type: 'time' as const,
      label: `Up to ${limit} min`,
      value: limit,
    })),
    ...servings.map((count) => ({
      type: 'servings' as const,
      label: `For ${count} ${count === 1 ? 'person' : 'people'}`,
      value: count,
    })),
  ];
}