import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.SafeAreaView.attrs({
})`
    flex: 1;
    background-color: ${Colors.CREAM};
	padding: 24px;
`;

export const Map = styled(MapView)`
    flex: 1;
	border: 2px solid ${Colors.DARKBLUE};
`;

export const HeaderButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 1;
    elevation: 2;
    padding: 6px;
    background-color: ${Colors.CREAM};
    border-radius: 20px;
`;