import { useMemo, useState } from 'react';
import { Recipe } from "../services";

export function useRecipeSearch(recipes: Recipe[]) {
  const [query, setQuery] = useState('');

  const visibleRecipes = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return recipes;
    return recipes.filter((recipe) => recipe.name.toLowerCase().includes(term));
  }, [recipes, query]);

  return { query, setQuery, visibleRecipes };
}
