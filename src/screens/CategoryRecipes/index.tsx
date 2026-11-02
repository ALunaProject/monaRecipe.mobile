import { useLayoutEffect } from 'react';

import type { CategoryType } from '../../components/Categories/types';
import { useFavorites } from '../../hooks';
import { useRecipesByCategory } from '../../hooks/useRecipes';
import type { RootStackScreenProps } from '../../navigation';
import { CatalogContent } from '../Catalog/components/CatalogContent';

function getTitle(type: CategoryType, value: string | number) {
	switch (type) {
		case 'cuisine':
		case 'difficulty':
			return `${value} recipes`;
		case 'time':
			return `Up to ${value} min`;
		case 'servings':
			return `For ${value} ${Number(value) === 1 ? 'person' : 'people'}`;
	}
}

export function CategoryRecipesScreen({
									 navigation,
									 route,
								 }: RootStackScreenProps<'CategoryRecipes'>) {
	const { type, value } = route.params;
	const { recipes, loading, error } = useRecipesByCategory(type, value);
	const { isFavorite, toggleFavorite } = useFavorites();
	const title = getTitle(type, value);

	useLayoutEffect(() => {
		navigation.setOptions({ title });
	}, [navigation, title]);

	return (
		<CatalogContent
			title={title}
			recipes={recipes}
			loading={loading}
			error={error}
			isFavorite={isFavorite}
			onToggleFavorite={toggleFavorite}
			onPressRecipe={(id) => navigation.push('Recipe', { id })}
		/>
	);
}