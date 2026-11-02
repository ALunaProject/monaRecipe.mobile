import { ActivityIndicator } from 'react-native';
import { Marker } from 'react-native-maps';

import * as S from './styles';
import { useGeocode } from './useGeocode';

export function MapsScreen() {
    const { coords, loading, error } = useGeocode('Avenida Paulista, 1578, São Paulo, SP, Brasil');

    if (loading) {
        return (
            <S.Center>
                <ActivityIndicator size="large" />
            </S.Center>
        );
    }

    if (error || !coords) {
        return (
            <S.Center>
                <S.Subtitle>{error ?? 'Address not found.'}</S.Subtitle>
            </S.Center>
        );
    }

    return (
        <S.Container>
            <S.Map
                initialRegion={{
                    ...coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={coords} title="Mona Recipes" description={'Avenida Paulista, 1578, São Paulo, SP, Brasil'} />
            </S.Map>
        </S.Container>
    );
}