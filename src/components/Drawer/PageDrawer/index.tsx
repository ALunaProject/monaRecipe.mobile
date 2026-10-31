import { Ionicons } from '@expo/vector-icons';
import { DrawerProps, PAGES } from "../types";
import * as S from "../styles";
import { Colors } from "../../../theme";


export function PagesDrawer({ onClose, onSelect }: DrawerProps) {
	return (
		<S.Panel>
			<S.CloseButton
				onPress={onClose} accessibilityLabel="Close menu">
	<Ionicons name="close" size={24} color={Colors.WHITE} />
		</S.CloseButton>

		<S.PanelTitle>Change Page</S.PanelTitle>

	{PAGES.map((page) => (
		<S.LinkRow
			key={page.key}
		onPress={() => onSelect(page.key)}
		accessibilityRole="link"
			>
			<S.LinkText>{page.label}</S.LinkText>
			<Ionicons name="arrow-forward" size={20} color={Colors.WHITE} />
		</S.LinkRow>
	))}
	</S.Panel>
);
}