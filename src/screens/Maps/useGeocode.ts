import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export type Coordinates = {
	latitude: number;
	longitude: number;
};

type GeocodeState = {
	coords: Coordinates | null;
	loading: boolean;
	error: string | null;
};

export function useGeocode(address: string): GeocodeState {
	const [state, setState] = useState<GeocodeState>({
		coords: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		// Evita atualizar o state se o componente desmontar ou o endereço mudar
		let cancelled = false;

		setState({ coords: null, loading: true, error: null });

		Location.geocodeAsync(address)
			.then((results) => {
				if (cancelled) return;

				const first = results[0];
				if (!first) {
					setState({ coords: null, loading: false, error: 'Address not found.' });
					return;
				}

				setState({
					coords: { latitude: first.latitude, longitude: first.longitude },
					loading: false,
					error: null,
				});
			})
			.catch(() => {
				if (cancelled) return;
				setState({ coords: null, loading: false, error: 'Could not look up the address.' });
			});

		return () => {
			cancelled = true;
		};
	}, [address]);

	return state;
}