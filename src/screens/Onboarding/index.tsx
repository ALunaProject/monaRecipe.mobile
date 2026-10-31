import { useRef, useState } from 'react';
import {
	FlatList,
	useWindowDimensions,
	type NativeScrollEvent,
	type NativeSyntheticEvent,
} from 'react-native';

import type { RootStackScreenProps } from '../../navigation';
import * as S from './styles';

const BACKGROUND = require('../../assets/onboarding-bg.jpg');

type ActionId = 'recipes' | 'bakery';

type OnboardingSlide = {
	id: string;
	description: string;
	emphasis?: boolean;
	actions?: {id: ActionId; label: string; variant: 'primary' | 'secondary'}[];
};

const SLIDES: OnboardingSlide[] = [
	{
		id: '1',
		description: 'Receitas caseiras feitas com carinho, do jeito que a Dona Mona ensinava.',
	},
	{
		id: '2',
		description: 'Explore as receitas favoritas da Dona Mona',
		emphasis: true,
		actions: [{id: 'recipes', label: 'Ver receitas', variant: 'primary'}],
	},
	{
		id: '3',
		description: 'Ou visite nossa cozinha e conheça de perto',
		emphasis: true,
		actions: [
			{id: 'recipes', label: 'Ver receitas', variant: 'primary'},
			{id: 'bakery', label: 'Visite nossa padaria!', variant: 'secondary'},
		],
	},
];

export function OnboardingScreen({navigation}: RootStackScreenProps<'Onboarding'>) {
	const {width} = useWindowDimensions();
	const listRef = useRef<FlatList<OnboardingSlide>>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const isFirst = currentIndex === 0;
	const isLast = currentIndex === SLIDES.length - 1;

	function goTo(index: number) {
		listRef.current?.scrollToIndex({index, animated: true});
		setCurrentIndex(index);
	}

	function goToRecipes() {
		// Troque 'Home' pela rota do catálogo de receitas
		navigation.replace('Home');
	}

	function handleAction(action: ActionId) {
		if (action === 'recipes') {
			goToRecipes();
			return;
		}
		navigation.replace('Maps');
	}

	function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
		setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
	}

	return (
		<S.Background source={BACKGROUND} resizeMode="cover">
			<S.Overlay/>

			<S.Content>
				<S.Header>
					<S.Counter>
						<S.CounterCurrent>{currentIndex + 1}</S.CounterCurrent>/{SLIDES.length}
					</S.Counter>

					{!isLast && (
						<S.SkipButton onPress={goToRecipes} accessibilityRole="button">
							<S.SkipText>Skip</S.SkipText>
						</S.SkipButton>
					)}
				</S.Header>

				<S.Actions><S.Title>Receitas da Dona Mona</S.Title>

					<FlatList
						ref={listRef}
						data={SLIDES}
						keyExtractor={(item) => item.id}
						horizontal
						pagingEnabled
						bounces={false}
						style={{flexGrow: 0}}
						showsHorizontalScrollIndicator={false}
						onMomentumScrollEnd={handleScrollEnd}
						renderItem={({item}) => (
							<S.Slide width={width}>
								<S.Description emphasis={item.emphasis}>{item.description}</S.Description>

								{item.actions?.map((action) => (
									<S.ActionButton
										key={action.label}
										variant={action.variant}
										onPress={() => handleAction(action.id)}
										accessibilityRole="button"
									>
										<S.ActionButtonText>{action.label}</S.ActionButtonText>
									</S.ActionButton>
								))}
							</S.Slide>
						)}
					/>

					<S.Footer>
						<S.SideSlot align="flex-start">
							{!isFirst && (
								<S.NavButton onPress={() => goTo(currentIndex - 1)} accessibilityRole="button">
									<S.NavButtonText>Prev</S.NavButtonText>
								</S.NavButton>
							)}
						</S.SideSlot>

						<S.Pagination>
							{SLIDES.map((slide, index) => (
								<S.Dot key={slide.id} active={index === currentIndex}/>
							))}
						</S.Pagination>

						<S.SideSlot align="flex-end">
							{!isLast && (
								<S.NavButton onPress={() => goTo(currentIndex + 1)} accessibilityRole="button">
									<S.NavButtonText>Next</S.NavButtonText>
								</S.NavButton>
							)}
						</S.SideSlot>
					</S.Footer></S.Actions>
			</S.Content>
		</S.Background>
	);
}