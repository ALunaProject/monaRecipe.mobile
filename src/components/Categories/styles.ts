import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

export const Category = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: ${Colors.RED};
  elevation: 4;
  shadow-color: ${Colors.BLACK};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 4px;
`;

export const CategoryFlag = styled.Text`
  font-size: 14px;
`;

export const CategoryText = styled.Text`
  font-family: Montserrat_600SemiBold;
  font-size: 14px;
  color: ${Colors.WHITE};
  text-transform: capitalize;
`;