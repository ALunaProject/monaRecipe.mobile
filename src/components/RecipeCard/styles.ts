import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Card = styled.Pressable`
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${Colors.BG};
  background-color: ${Colors.WHITE};
  overflow: hidden;
  elevation: 2;
`;

export const CardImage = styled.Image`
  width: 104px;
  height: 104px;
  background-color: ${Colors.BG};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 12px 16px;
`;

export const Title = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 17px;
  font-weight: 700;
`;

export const Meta = styled.Text`
  margin-top: 4px;
  color: ${Colors.DARKBLUE};
  font-size: 13px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const Rating = styled.Text`
  color: ${Colors.RED};
  font-size: 13px;
  font-weight: 700;
`;

export const Time = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 13px;
`;
