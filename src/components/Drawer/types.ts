import { ReactNode } from "react";

export type PageKey = 'Catalog' | 'Maps' | 'Favorites';

export const PAGES: { key: PageKey; label: string }[] = [
	{ key: 'Catalog', label: 'Catálogo de Receitas' },
	{ key: 'Maps', label: 'Mapa da Padaria' },
	{ key: 'Favorites', label: 'Favoritos' },
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
	onSelectPage: (page: PageKey) => void;
	onSeeCategories: () => void;
	children: ReactNode;
};
