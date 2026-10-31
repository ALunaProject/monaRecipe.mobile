import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Panel = styled.View`
  flex: 1;
  background-color: ${Colors.DARKBLUE};
  padding: 75px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 4px;
`;

export const PanelTitle = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 22px;
  color: #ffffff;
  margin: 16px 0 24px;
`;

export const LinkRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
`;

export const LinkText = styled.Text`
  font-family: 'Glory_700Bold';
  font-size: 15px;
  color: #ffffff;
`;

export const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px 8px;
  font-family: 'Glory_400Regular';
  font-size: 15px;
  color: #ffffff;
`;