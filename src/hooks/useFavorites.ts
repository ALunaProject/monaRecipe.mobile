import { useCallback, useState } from 'react';
import { Recipe } from "../services";


type RecipeId = Recipe['id'];

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<Set<RecipeId>>(new Set());

  const toggleFavorite = useCallback((id: RecipeId) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: RecipeId) => favoriteIds.has(id), [favoriteIds]);

  return { favoriteIds, isFavorite, toggleFavorite };
}
