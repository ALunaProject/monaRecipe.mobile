import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-drawer-layout';

import { Colors } from '../../../theme';
import { PagesDrawer } from '../PageDrawer';
import { SearchDrawer } from '../SearchDrawer';
import type { PageKey, SideDrawersProps } from '../types';

const DRAWER_STYLE = { width: '85%', backgroundColor: Colors.DARKBLUE } as const;
const OVERLAY_STYLE = { backgroundColor: 'rgba(0, 0, 0, 0.4)' } as const;

export function SideDrawers({
  menu,
  search,
  query,
  onChangeQuery,
  children,
}: SideDrawersProps) {
  const navigation = useNavigation();

  function handleSelectPage(page: PageKey) {
    menu.onClose();
    if (page !== 'Catalog') {
      navigation.navigate(page);
    }
  }

  function handleSeeCategories() {
    navigation.navigate('Categories');
  }

  return (
    <Drawer
      open={menu.open}
      onOpen={menu.onOpen}
      onClose={menu.onClose}
      drawerPosition="left"
      drawerType="front"
      drawerStyle={DRAWER_STYLE}
      overlayStyle={OVERLAY_STYLE}
      renderDrawerContent={() => (
        <PagesDrawer onClose={menu.onClose} onSelect={handleSelectPage} />
      )}
    >
      <Drawer
        open={search.open}
        onOpen={search.onOpen}
        onClose={search.onClose}
        drawerPosition="right"
        drawerType="front"
        drawerStyle={DRAWER_STYLE}
        overlayStyle={OVERLAY_STYLE}
        renderDrawerContent={() => (
          <SearchDrawer
            query={query}
            onChangeQuery={onChangeQuery}
            onSubmit={search.onClose}
            onClose={search.onClose}
            onSeeCategories={handleSeeCategories}
          />
        )}
      >
        {children}
      </Drawer>
    </Drawer>
  );
}
