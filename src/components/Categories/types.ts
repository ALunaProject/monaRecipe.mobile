export type CategoryType = 'cuisine' | 'difficulty' | 'time' | 'servings';

export type CategoryItem = {
	type: CategoryType;
	label: string;
	value: string | number;
	flag?: string;

};

export type CategoriesProps = {
	items: CategoryItem[];
	onSelect: (item: CategoryItem) => void;
};