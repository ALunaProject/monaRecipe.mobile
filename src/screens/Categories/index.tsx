import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Categories } from '../../components/Categories';
import type { CategoryItem } from '../../components/Categories/types';
import { useCategories } from '../../hooks/useRecipes';
import type { RootStackScreenProps } from '../../navigation';
import { Colors } from '../../theme';
import * as S from '../Catalog/styles';

export function CategoriesScreen({
									 navigation,
								 }: RootStackScreenProps<'Categories'>) {
	const { categories, loading, error } = useCategories();
	const insets = useSafeAreaInsets();

	useLayoutEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, [navigation]);

	const handleSelectCategory = (item: CategoryItem) => {
		navigation.push('CategoryRecipes', { type: item.type, value: item.value });
	};

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
				<S.HeaderButton
					onPress={navigation.goBack}
					hitSlop={8}
					accessibilityRole="button"
					accessibilityLabel="Go back"
				>
					<Ionicons name="arrow-back" size={28} color={Colors.DARKBLUE} />
				</S.HeaderButton>

				<S.Title>Categories</S.Title>

				<Categories items={categories} onSelect={handleSelectCategory} />
		</S.Container>
	);
}