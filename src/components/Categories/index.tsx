import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../../theme';
import * as S from './styles';
import type { CategoriesProps } from './types';

export function Categories({ items, onSelect }: CategoriesProps) {
	return (
		<S.Container>
			{items.map((item) => (
				<S.Category
					key={`${item.type}-${item.value}`}
					onPress={() => onSelect(item)}
					accessibilityRole="button"
					accessibilityLabel={`Browse ${item.label}`}
				>
					{item.flag ? (
						<S.CategoryFlag>{item.flag}</S.CategoryFlag>
					) : (
						<MaterialCommunityIcons
							name="bowl-mix-outline"
							size={18}
							color={Colors.WHITE}
						/>
					)}
					<S.CategoryText>{item.label}</S.CategoryText>
				</S.Category>
			))}
		</S.Container>
	);
}