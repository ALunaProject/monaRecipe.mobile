import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
`;

export const StateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.WHITE};
`;

export const StateText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${Colors.DARKBLUE};
`;

export const Count = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${Colors.DARKBLUE};
`;

export const Card = styled.Pressable`
  flex-direction: row;
  border-width: 2px;
  border-color: ${Colors.DARKBLUE};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${Colors.WHITE};
`;

export const CardImage = styled.Image`
  width: 110px;
  height: 110px;
`;

export const CardInfo = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: center;
  gap: 4px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.DARKBLUE};
`;

export const CardMeta = styled.Text`
  font-size: 13px;
  color: ${Colors.DARKBLUE};
`;