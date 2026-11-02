import { useCallback, useSyncExternalStore } from 'react';
import { Recipe } from "../services";

type RecipeId = Recipe['id'];

let favoriteIds: Set<RecipeId> = new Set();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return favoriteIds;
}

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot);

  const toggleFavorite = useCallback((id: RecipeId) => {
    const next = new Set(favoriteIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    favoriteIds = next;
    listeners.forEach((listener) => listener());
  }, []);

  const isFavorite = useCallback((id: RecipeId) => ids.has(id), [ids]);

  return { favoriteIds: ids, isFavorite, toggleFavorite };
}
