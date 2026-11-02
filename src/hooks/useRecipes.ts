import { useEffect, useState } from 'react';
import { getRecipeById, getRecipes, getRecipesByCategory, Recipe } from '../services';
import type { CategoryItem, CategoryType } from '../components/Categories/types';
import { getCategories } from "../services/recipes";

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
          setError('Could not load the recipes.');
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

export function useRecipe(id: number) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRecipe() {
      try {
        const data = await getRecipeById(id);

        if (isMounted) {
          setRecipe(data);
        }
      } catch {
        if (isMounted) {
          setError('Could not load the recipe.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRecipe();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { recipe, loading, error };
}

export function useRecipesByCategory(type: CategoryType, value: string | number) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await getRecipesByCategory(type, value);

        if (isMounted) {
          setRecipes(data);
        }
      } catch {
        if (isMounted) {
          setError('Could not load the recipes.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [type, value]);

  return { recipes, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const data = await getCategories();

        if (isMounted) {
          setCategories(data);
        }
      } catch {
        if (isMounted) {
          setError('Could not load the categories.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, loading, error };
}