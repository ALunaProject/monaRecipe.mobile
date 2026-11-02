import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogScreen } from '../screens/Catalog';
import { FavoritesScreen } from '../screens/Favorites';
import { MapsScreen } from '../screens/Maps';
import { OnboardingScreen } from '../screens/Onboarding';
import { RecipeScreen } from '../screens/Recipe';
import { SplashScreen } from '../screens/Splash';
import { Colors } from '../theme';
import type { RootStackParamList } from './types';
import { CategoryRecipesScreen } from "../screens/CategoryRecipes";
import { CategoriesScreen } from "../screens/Categories";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="Splash"
			screenOptions={{
				headerTitle: '',
				headerTransparent: true,
				headerShadowVisible: false,
				headerTintColor: Colors.DARKBLUE,
				contentStyle: {backgroundColor: Colors.CREAM},
			}}
		>
			<Stack.Screen
				name="Splash"
				component={SplashScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Onboarding"
				component={OnboardingScreen}
				options={{title: 'Favorites'}}
			/>
			<Stack.Screen
				name="Catalog"
				component={CatalogScreen}
				options={{title: 'Recipes'}}
			/>
			<Stack.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{title: 'Favorites'}}
			/>
			<Stack.Screen
				name="Recipe"
				component={RecipeScreen}
				options={{title: 'Recipe'}}
			/>
			<Stack.Screen
				name="Maps"
				component={MapsScreen}
				options={{title: 'Maps'}}
			/>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
			/>
			<Stack.Screen
				name="CategoryRecipes"
				component={CategoryRecipesScreen}
			/>
		</Stack.Navigator>
	);
}
