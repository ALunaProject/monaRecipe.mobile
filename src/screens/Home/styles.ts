import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.BG};
`;

export const Eyebrow = styled.Text`
  color: ${Colors.RED};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  margin-top: 12px;
  color: ${Colors.DARKBLUE};
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
`;

export const Subtitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 32px;
  color: ${Colors.DARKBLUE};
  font-size: 16px;
  line-height: 24px;
`;
