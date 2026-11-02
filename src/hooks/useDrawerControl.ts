import { useCallback, useState } from 'react';

import type { DrawerControl } from '../components/Drawer/types';

export function useDrawerControl(): DrawerControl {
	const [open, setOpen] = useState(false);
	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return { open, onOpen, onClose };
}