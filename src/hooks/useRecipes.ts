import { useEffect, useState } from 'react';
import { getRecipes, Recipe } from "../services";


export function useRecipes(limit = 20) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRecipes() {
      try {
        const data = await getRecipes({ limit });

        if (isMounted) {
          setRecipes(data.recipes);
        }
      } catch {
        if (isMounted) {
          setError('Não foi possível carregar as receitas.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRecipes();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { recipes, loading, error };
}
