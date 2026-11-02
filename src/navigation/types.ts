import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CategoryType } from "../components/Categories/types";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Catalog: undefined;
  Favorites: undefined;
  Maps: undefined;
  Recipe: { id: number };
  Categories: undefined;
  CategoryRecipes: { type: CategoryType; value: string | number };
};

export type RootStackScreenProps<
  RouteName extends keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
