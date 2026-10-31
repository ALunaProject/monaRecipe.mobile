import { ActivityIndicator } from 'react-native';
import { Marker } from 'react-native-maps';

import { Center, Container, Map, Subtitle } from './styles';
import { useGeocode } from './useGeocode';

const ADDRESS = 'Avenida Paulista, 1578, São Paulo, SP, Brasil';

const ZOOM_DELTA = 0.01;

export function MapsScreen() {
    const { coords, loading, error } = useGeocode(ADDRESS);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

    if (error || !coords) {
        return (
            <Center>
                <Subtitle>{error ?? 'Endereço não encontrado.'}</Subtitle>
            </Center>
        );
    }

    return (
        <Container>
            <Map
                initialRegion={{
                    ...coords,
                    latitudeDelta: ZOOM_DELTA,
                    longitudeDelta: ZOOM_DELTA,
                }}
            >
                <Marker coordinate={coords} title="Mona Recipes" description={ADDRESS} />
            </Map>
        </Container>
    );
}