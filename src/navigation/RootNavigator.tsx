import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogScreen } from '../screens/Catalog';
import { HomeScreen } from '../screens/Home';
import { RecipeScreen } from '../screens/Recipe';
import { SplashScreen } from '../screens/Splash';
import { colors } from '../theme';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
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
    </Stack.Navigator>
  );
}
