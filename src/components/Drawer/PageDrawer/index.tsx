import { Ionicons } from '@expo/vector-icons';
import { DrawerProps, PAGES } from "../types";
import * as S from "../styles";


export function PagesDrawer({ onClose, onSelect }: DrawerProps) {
	return (
		<S.Panel>
			<S.CloseButton
				onPress={onClose} accessibilityLabel="Fechar menu">
	<Ionicons name="close" size={24} color="#FFFFFF" />
		</S.CloseButton>

		<S.PanelTitle>Mudar de Página</S.PanelTitle>

	{PAGES.map((page) => (
		<S.LinkRow
			key={page.key}
		onPress={() => onSelect(page.key)}
		accessibilityRole="link"
			>
			<S.LinkText>{page.label}</S.LinkText>
			<Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
		</S.LinkRow>
	))}
	</S.Panel>
);
}