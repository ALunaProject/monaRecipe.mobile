import { SideDrawers } from '../../components/Drawer/SideDrawers';
import { useDrawerControl } from '../../hooks/useDrawerControl';
import type { RootStackScreenProps } from '../../navigation';
import { useCatalogHeader, useFavorites, useRecipes, useRecipeSearch } from "../../hooks";
import { CatalogContent } from "./components/CatalogContent";

export function CatalogScreen({ navigation }: RootStackScreenProps<'Catalog'>) {
  const menu = useDrawerControl();
  const search = useDrawerControl();

  const { recipes, loading, error } = useRecipes();
  const { query, setQuery, visibleRecipes } = useRecipeSearch(recipes);
  const { isFavorite, toggleFavorite } = useFavorites();

  useCatalogHeader({
    navigation,
    onOpenMenu: menu.onOpen,
    onOpenSearch: search.onOpen,
  });

  return (
    <SideDrawers
      menu={menu}
      search={search}
      query={query}
      onChangeQuery={setQuery}
    >
      <CatalogContent
        recipes={visibleRecipes}
        loading={loading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
        onPressRecipe={(id) => navigation.navigate('Recipe', { id })}
      />
    </SideDrawers>
  );
}
