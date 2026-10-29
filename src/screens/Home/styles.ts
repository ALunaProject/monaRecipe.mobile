import styled from 'styled-components/native';

import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  background-color: ${colors.background};
`;

export const Eyebrow = styled.Text`
  color: ${colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  margin-top: 12px;
  color: ${colors.text};
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
`;

export const Subtitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 32px;
  color: ${colors.textMuted};
  font-size: 16px;
  line-height: 24px;
`;
