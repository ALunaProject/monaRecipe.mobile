import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { getFavoritesRecipes, Recipe } from "../services";

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

export function useFavoriteRecipes(favoriteIds: Set<RecipeId>) {
  const [loaded, setLoaded] = useState<Map<RecipeId, Recipe>>(new Map());
  const [error, setError] = useState<string | null>(null);
  const loadedRef = useRef(loaded);

  useEffect(() => {
    loadedRef.current = loaded;
  }, [loaded]);

  useEffect(() => {
    const missingIds = [...favoriteIds].filter((id) => !loadedRef.current.has(id));
    if (missingIds.length === 0) return;

    let isMounted = true;

    async function loadFavorites() {
      try {
        const data = await getFavoritesRecipes(missingIds);

        if (isMounted) {
          setError(null);
          setLoaded((prev) => {
            const next = new Map(prev);
            data.forEach((recipe) => next.set(recipe.id, recipe));
            return next;
          });
        }
      } catch {
        if (isMounted) {
          setError('Could not load your favorite recipes.');
        }
      }
    }

    loadFavorites();

    return () => {
      isMounted = false;
    };
  }, [favoriteIds]);

  const recipes = useMemo(
      () => [...favoriteIds].flatMap((id) => loaded.get(id) ?? []),
      [favoriteIds, loaded],
  );

  const loading = !error && recipes.length < favoriteIds.size;

  return { recipes, loading, error };
}
