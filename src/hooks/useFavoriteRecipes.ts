import { useEffect, useMemo, useRef, useState } from 'react';
import { getFavoritesRecipes, Recipe } from "../services";


type RecipeId = Recipe['id'];

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
