import { Marker } from 'react-native-maps';

import * as S from './styles';

const LOCATION = {
	latitude: -29.7015,
	longitude: -51.1380,
};

export function MapsScreen() {

	return (
		<S.Container>
			<S.Map
				initialRegion={{
					...LOCATION,
					latitudeDelta: 0.001,
					longitudeDelta: 0.001,
				}}
			>
				<Marker
					coordinate={LOCATION}
					title="Padaria da Mona"
					description="R. Cel. Jacob Kroeff Filho, 2155 - Rondônia, Novo Hamburgo - RS, 93415-580"
				/>
			</S.Map>
		</S.Container>
	);
}