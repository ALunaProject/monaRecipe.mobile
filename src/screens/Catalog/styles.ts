import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import type { Recipe } from '../../services';
import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const List = styled(FlatList<Recipe>).attrs({
  contentContainerStyle: { padding: 16 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const StateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${colors.background};
`;

export const StateText = styled.Text`
  color: ${colors.textMuted};
  font-size: 15px;
  text-align: center;
`;
