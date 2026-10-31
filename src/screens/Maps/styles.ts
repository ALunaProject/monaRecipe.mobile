import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Map = styled(MapView)`
    flex: 1;
`;

export const Center = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #6b7280;
  text-align: center;
`;