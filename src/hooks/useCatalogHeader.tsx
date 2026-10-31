import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';

import * as S from '../screens/Catalog/styles';
import { CatalogNavigation } from "../screens/Catalog/types";
import { Colors } from "../theme";

type UseCatalogHeaderParams = {
  navigation: CatalogNavigation;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
};

// TODO: depois tirar os botões do header pra arrumar o design
// (basta remover a chamada deste hook na tela)
export function useCatalogHeader({
  navigation,
  onOpenMenu,
  onOpenSearch,
}: UseCatalogHeaderParams) {
  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      headerLeft: () => (
        <S.HeaderButton onPress={onOpenMenu} accessibilityLabel="Open menu">
          <Ionicons name="menu" size={24} color={Colors.DARKBLUE} />
        </S.HeaderButton>
      ),
      headerRight: () => (
        <S.HeaderButton onPress={onOpenSearch} accessibilityLabel="Search">
          <Ionicons name="search" size={22} color={Colors.DARKBLUE} />
        </S.HeaderButton>
      ),
    });
  }, [navigation, onOpenMenu, onOpenSearch]);
}
