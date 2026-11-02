import { ActivityIndicator } from 'react-native';
import * as S from "../Catalog/styles";
import type { RootStackScreenProps } from "../../navigation";
import { RecipeCard } from "../../components";
import { Colors } from "../../theme";
import { useFavorites } from "../../hooks";
import { useFavoriteRecipes } from "../../hooks/useFavorites";

export function FavoritesScreen({ navigation }: RootStackScreenProps<'Favorites'>) {
	const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
	const { recipes, loading, error } = useFavoriteRecipes(favoriteIds);

	if (loading) {
		return (
			<S.StateContainer>
				<ActivityIndicator color={Colors.RED} size="large" />
			</S.StateContainer>
		);
	}

	if (error) {
		return (
			<S.StateContainer>
				<S.StateText>{error}</S.StateText>
			</S.StateContainer>
		);
	}

	return (
		<S.Container>
			<S.Title>Your favorites</S.Title>
			{recipes.length === 0 ? (
				<S.StateText>You have no favorite recipes yet.</S.StateText>
			) : (
				<S.Grid>
					{recipes.map((recipe) => (
						<S.GridItem key={recipe.id}>
							<RecipeCard
								recipe={recipe}
								onPress={() => navigation.navigate('Recipe', { id: recipe.id })}
								favorite={isFavorite(recipe.id)}
								onToggleFavorite={() => toggleFavorite(recipe.id)}
							/>
						</S.GridItem>
					))}
				</S.Grid>
			)}
		</S.Container>
	);
}
