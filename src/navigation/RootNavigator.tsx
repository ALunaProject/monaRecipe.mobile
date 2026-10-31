import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogScreen } from '../screens/Catalog';
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
        headerStyle: { backgroundColor: Colors.BG },
        headerTintColor: Colors.DARKBLUE,
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.BG },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ title: 'Receitas' }}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{ title: 'Receita' }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ title: 'Maps' }}
      />
    </Stack.Navigator>
  );
}
