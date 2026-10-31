import type { RootStackScreenProps } from '../../navigation';
import type { Recipe } from '../../services';

export type CatalogNavigation = RootStackScreenProps<'Catalog'>['navigation'];

export type CatalogContentProps = {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  isFavorite: (id: Recipe['id']) => boolean;
  onToggleFavorite: (id: Recipe['id']) => void;
  onPressRecipe: (id: Recipe['id']) => void;
};
