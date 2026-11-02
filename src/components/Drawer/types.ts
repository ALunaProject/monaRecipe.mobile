import { ReactNode } from "react";

export type PageKey = 'Catalog' | 'Maps' | 'Favorites';

export const PAGES: { key: PageKey; label: string }[] = [
	{ key: 'Catalog', label: 'Recipe Catalog' },
	{ key: 'Maps', label: 'Bakery Map' },
	{ key: 'Favorites', label: 'Favorites' },
];

export type DrawerProps = {
	onClose: () => void;
	onSelect: (page: PageKey) => void;
};

export type DrawerControl = {
	open: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export type SideDrawersProps = {
	menu: DrawerControl;
	search: DrawerControl;
	query: string;
	onChangeQuery: (value: string) => void;
	children: ReactNode;
};
