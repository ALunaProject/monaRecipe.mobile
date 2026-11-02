import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFavorites } from '../../hooks';
import { useRecipe } from '../../hooks/useRecipes';
import { CUISINE_FLAGS } from '../../services';
import type { RootStackScreenProps } from '../../navigation';
import { Colors } from '../../theme';
import * as S from './styles';
import { CategoryItem } from "../../components/Categories/types";
import { Categories } from "../../components/Categories";

export function RecipeScreen({navigation, route}: RootStackScreenProps<'Recipe'>) {
	const {id} = route.params;
	const {recipe, loading, error} = useRecipe(id);
	const {isFavorite, toggleFavorite} = useFavorites();
	const insets = useSafeAreaInsets();

	useLayoutEffect(() => {
		navigation.setOptions({headerShown: !recipe});
	}, [navigation, recipe]);

	if (loading) {
		return (
			<S.StateContainer>
				<ActivityIndicator color={Colors.RED} size="large"/>
			</S.StateContainer>
		);
	}
	if (error || !recipe) {
		return (
			<S.StateContainer>
				<S.StateText>{error ?? 'Recipe not found.'}</S.StateText>
			</S.StateContainer>
		);
	}

	const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;
	const favorite = isFavorite(recipe.id);
	const flag = CUISINE_FLAGS[recipe.cuisine];
	const categories: CategoryItem[] = [
		{ type: 'cuisine', label: recipe.cuisine, value: recipe.cuisine, flag },
		{ type: 'difficulty', label: recipe.difficulty, value: recipe.difficulty },
		{ type: 'time', label: `${totalTime} min`, value: totalTime },
		{
			type: 'servings',
			label: `For ${recipe.servings} ${recipe.servings === 1 ? 'person' : 'people'}`,
			value: recipe.servings,
		},
	];

	const handleSelectCategory = (item: CategoryItem) => {
		navigation.push('CategoryRecipes', { type: item.type, value: item.value });
	};

	return (
		<S.Container>
			<S.Content contentContainerStyle={{paddingBottom: insets.bottom + 32}}>
				<S.TopSection style={{paddingTop: insets.top + 16}}>
					<S.Header>
						<S.HeaderButton
							onPress={navigation.goBack}
							hitSlop={8}
							accessibilityRole="button"
							accessibilityLabel="Go back"
						>
							<Ionicons name="arrow-back" size={28} color={Colors.DARKBLUE}/>
						</S.HeaderButton>
						<S.HeaderButton
							onPress={() => toggleFavorite(recipe.id)}
							hitSlop={8}
							accessibilityRole="button"
							accessibilityLabel={favorite ? 'Remove from favorites' : 'Add to favorites'}
						>
							<Ionicons
								name={favorite ? 'heart' : 'heart-outline'}
								size={28}
								color={favorite ? Colors.RED : Colors.DARKBLUE}
							/>
						</S.HeaderButton>
					</S.Header>

					<S.Title>{recipe.name}</S.Title>
					<Categories items={categories} onSelect={handleSelectCategory} />
				</S.TopSection>

				<S.IngredientsSection>
					<S.IngredientsColumn>
						<S.SectionTitle>Ingredients</S.SectionTitle>
						{recipe.ingredients.map((ingredient, index) => (
							<S.BulletRow key={`${index}-${ingredient}`}>
								<S.Bullet/>
								<S.ListText>{ingredient}</S.ListText>
							</S.BulletRow>
						))}
					</S.IngredientsColumn>

					<S.RecipeImage
						style={{boxShadow: `-4px 4px 0px ${Colors.RED}, -9px 9px 0px ${Colors.DARKBLUE}`}}
						source={{uri: recipe.image}} resizeMode="cover"/>
				</S.IngredientsSection>

				<S.InstructionsSection>
					<S.SectionTitle>Instructions</S.SectionTitle>
					{recipe.instructions.map((instruction, index) => (
						<S.BulletRow key={`${index}-${instruction}`}>
							<S.Bullet/>
							<S.ListText>{instruction}</S.ListText>
						</S.BulletRow>
					))}
				</S.InstructionsSection>
			</S.Content>
		</S.Container>
	);
}
