import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import type { Recipe } from '../../services';
import { Colors } from '../../theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 75, paddingHorizontal: 20, paddingBottom: 24 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${Colors.CREAM};
`;

export const Title = styled.Text`
  font-family: Montserrat_700Bold;
  font-size: 30px;
  color: ${Colors.DARKBLUE};
  margin-bottom: 12px;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -6px;
`;

export const GridItem = styled.View`
  width: 50%;
  padding: 6px;
`;

export const StateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.BG};
`;

export const StateText = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 15px;
  text-align: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: 6px;
`;