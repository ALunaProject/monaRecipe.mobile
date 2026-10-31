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
		description: 'Homemade recipes made with love, just the way Dona Mona used to teach.',
	},
	{
		id: '2',
		description: "Explore Dona Mona's favorite recipes",
		emphasis: true,
		actions: [{id: 'recipes', label: 'See recipes', variant: 'primary'}],
	},
	{
		id: '3',
		description: 'Or visit our kitchen and see it up close',
		emphasis: true,
		actions: [
			{id: 'recipes', label: 'See recipes', variant: 'primary'},
			{id: 'bakery', label: 'Visit our bakery!', variant: 'secondary'},
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

				<S.Actions><S.Title>{"Dona Mona's Recipes"}</S.Title>

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