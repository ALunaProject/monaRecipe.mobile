import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.BG};
`;

export const Title = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 24px;
  font-weight: 800;
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  color: ${Colors.DARKBLUE};
  font-size: 15px;
  text-align: center;
`;
