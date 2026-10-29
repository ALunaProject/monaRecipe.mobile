import { ActivityIndicator, type PressableProps } from 'react-native';

import { colors } from '../../theme';
import { Container, Label, type ButtonVariant } from './styles';

type ButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
};

export function Button({
  label,
  variant = 'primary',
  loading = false,
  disabled = false,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Container
      $variant={variant}
      $disabled={isDisabled}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.white : colors.primary}
        />
      ) : (
        <Label $variant={variant}>{label}</Label>
      )}
    </Container>
  );
}
