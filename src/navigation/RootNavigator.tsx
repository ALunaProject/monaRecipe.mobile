import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogScreen } from '../screens/Catalog';
import { FavoritesScreen } from '../screens/Favorites';
import { HomeScreen } from '../screens/Home';
import { MapsScreen } from '../screens/Maps';
import { OnboardingScreen } from '../screens/Onboarding';
import { RecipeScreen } from '../screens/Recipe';
import { SplashScreen } from '../screens/Splash';
import { Colors } from '../theme';
import type { RootStackParamList } from './types';

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
                contentStyle: { backgroundColor: Colors.CREAM },
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
				name="Home"
				component={HomeScreen}
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
		</Stack.Navigator>
	);
}
