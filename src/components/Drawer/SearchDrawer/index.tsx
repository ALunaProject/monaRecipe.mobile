import { Ionicons } from '@expo/vector-icons';

import * as S from '../styles';
import { Colors } from "../../../theme";

type Props = {
	query: string;
	onChangeQuery: (value: string) => void;
	onSubmit: () => void;
	onClose: () => void;
	onSeeCategories: () => void;
};

export function SearchDrawer({
								 query,
								 onChangeQuery,
								 onSubmit,
								 onClose,
								 onSeeCategories,
							 }: Props) {
	return (
		<S.Panel>
			<S.CloseButton onPress={onClose} accessibilityLabel="Close search">
				<Ionicons name="close" size={24} color={Colors.WHITE} />
			</S.CloseButton>

			<S.PanelTitle>Search</S.PanelTitle>

			<S.SearchBox>
				<Ionicons name="search" size={18} color={Colors.WHITE} />
				<S.SearchInput
					value={query}
					onChangeText={onChangeQuery}
					onSubmitEditing={onSubmit}
					placeholder="Search"
					placeholderTextColor="rgba(255, 255, 255, 0.7)"
					returnKeyType="search"
					autoCorrect={false}
				/>
			</S.SearchBox>

			<S.LinkRow onPress={onSeeCategories} accessibilityRole="link">
				<S.LinkText>See Categories</S.LinkText>
				<Ionicons name="arrow-forward" size={20} color={Colors.WHITE} />
			</S.LinkRow>
		</S.Panel>
	);
}