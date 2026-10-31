import { Ionicons } from '@expo/vector-icons';

import * as S from '../styles';

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
			<S.CloseButton onPress={onClose} accessibilityLabel="Fechar pesquisa">
				<Ionicons name="close" size={24} color="#FFFFFF" />
			</S.CloseButton>

			<S.PanelTitle>Pesquisar</S.PanelTitle>

			<S.SearchBox>
				<Ionicons name="search" size={18} color="#FFFFFF" />
				<S.SearchInput
					value={query}
					onChangeText={onChangeQuery}
					onSubmitEditing={onSubmit}
					placeholder="Pesquisar"
					placeholderTextColor="rgba(255, 255, 255, 0.7)"
					returnKeyType="search"
					autoCorrect={false}
				/>
			</S.SearchBox>

			<S.LinkRow onPress={onSeeCategories} accessibilityRole="link">
				<S.LinkText>Ver Categorias</S.LinkText>
				<Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
			</S.LinkRow>
		</S.Panel>
	);
}