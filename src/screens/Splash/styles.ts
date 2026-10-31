import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${Colors.RED};
`;

export const Brand = styled.Text`
  color: ${Colors.WHITE};
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
`;

export const Tagline = styled.Text`
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  text-align: center;
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 32px;
`;
