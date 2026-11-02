import { ActivityIndicator, Text } from 'react-native';
import { CatalogContentProps } from "../types";
import * as S from '../styles';
import { Colors } from "../../../theme";
import { RecipeCard } from "../../../components";

export function CatalogContent({
								   recipes,
								   loading,
								   error,
								   isFavorite,
								   onToggleFavorite,
								   onPressRecipe,
								   title = 'Explore our menu!'
							   }: CatalogContentProps) {
	if (loading) {
		return (
			<S.StateContainer>
				<ActivityIndicator color={Colors.RED} size="large"/>
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
			<S.Title>{title}</S.Title>
			{recipes.length === 0 ? (
				<S.StateText>No recipes found.</S.StateText>
			) : (
				<S.Grid>
					{recipes.map((recipe) => (
						<S.GridItem key={recipe.id}>
							<RecipeCard
								recipe={recipe}
								onPress={() => onPressRecipe(recipe.id)}
								favorite={isFavorite(recipe.id)}
								onToggleFavorite={() => onToggleFavorite(recipe.id)}
							/>
						</S.GridItem>
					))}
				</S.Grid>
			)}
		</S.Container>
	);
}
