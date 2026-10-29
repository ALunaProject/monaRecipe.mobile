import styled from 'styled-components/native';

import { colors } from '../../theme';

export type ButtonVariant = 'primary' | 'outline';

export const Container = styled.Pressable<{
  $variant: ButtonVariant;
  $disabled: boolean;
}>`
  min-height: 52px;
  padding: 0 24px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? colors.primary : 'transparent'};
  border-width: ${({ $variant }) => ($variant === 'outline' ? 2 : 0)}px;
  border-color: ${colors.primary};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Label = styled.Text<{ $variant: ButtonVariant }>`
  color: ${({ $variant }) =>
    $variant === 'primary' ? colors.white : colors.primary};
  font-size: 16px;
  font-weight: 700;
`;
