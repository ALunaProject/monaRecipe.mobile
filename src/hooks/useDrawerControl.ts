import { useCallback, useState } from 'react';

import type { DrawerControl } from '../components/Drawer/types';

export function useDrawerControl(): DrawerControl {
	const [open, setOpen] = useState(false);

	// Funções estáveis: podem ir em dependências de useEffect sem re-executar
	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return { open, onOpen, onClose };
}