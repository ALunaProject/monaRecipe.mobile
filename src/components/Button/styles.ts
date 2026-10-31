import styled from 'styled-components/native';

import { Colors } from '../../theme';

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
    $variant === 'primary' ? Colors.RED : 'transparent'};
  border-width: ${({ $variant }) => ($variant === 'outline' ? 2 : 0)}px;
  border-color: ${Colors.RED};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Label = styled.Text<{ $variant: ButtonVariant }>`
  color: ${({ $variant }) =>
    $variant === 'primary' ? Colors.WHITE : Colors.RED};
  font-size: 16px;
  font-weight: 700;
`;
