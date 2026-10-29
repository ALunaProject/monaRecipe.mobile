import styled from 'styled-components/native';

import { colors } from '../../theme';

export const Card = styled.Pressable`
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.border};
  background-color: ${colors.surface};
  overflow: hidden;
  elevation: 2;
`;

export const CardImage = styled.Image`
  width: 104px;
  height: 104px;
  background-color: ${colors.border};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 12px 16px;
`;

export const Title = styled.Text`
  color: ${colors.text};
  font-size: 17px;
  font-weight: 700;
`;

export const Meta = styled.Text`
  margin-top: 4px;
  color: ${colors.textMuted};
  font-size: 13px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const Rating = styled.Text`
  color: ${colors.primary};
  font-size: 13px;
  font-weight: 700;
`;

export const Time = styled.Text`
  color: ${colors.textMuted};
  font-size: 13px;
`;
