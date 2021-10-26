import React from 'react';
import styled from 'styled-components/native';
import { margin } from 'styled-system';
import { Text } from './Text';

interface ButtonProps {
  onPress: (options?: any) => any;
  children: React.ReactNode;
  IconLeft?: React.FC;
  IconRight?: React.FC;
  variant?: 'filled' | 'outlined' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
  height?: number;
  my?: number;
}

type ContainerProps = Partial<ButtonProps> & {
  hasIcon: boolean;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  ${margin};
  align-self: flex-start;
  padding: 10px;
  width: ${({ fullWidth }) => (!fullWidth ? '100%' : 'auto')};
  border-radius: ${({ theme }) => theme.border.defaultRadius};
  background-color: ${({ variant, disabled, theme }) => {
    if (variant === 'filled') {
      if (disabled) {
        return theme.colors.disabled;
      }
      return theme.colors.primary;
    }
    return '#fff';
  }};
  border: ${({ variant, theme }) =>
    variant === 'outlined' ? theme.border.default : 'none'};
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
  justify-content: center;
  height: ${({ height }) => (!height ? '50px' : `${height}px`)};
`;

const IconLeftContainer = styled.View`
  position: absolute;
  left: 20px;
`;

const IconRightContainer = styled.View`
  position: absolute;
  right: 20px;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  fullWidth = false,
  IconLeft,
  IconRight,
  disabled,
  ...props
}) => {
  const textColor = () => {
    if (variant === 'filled') return '#fff';
  };
  const hasIcon = !!IconLeft || !!IconRight;

  const elevation = disabled ? 0 : 3;

  return (
    <Container
      fullWidth={fullWidth}
      variant={variant}
      hasIcon={hasIcon}
      disabled={disabled}
      {...props}
      style={{ elevation }}
    >
      <IconLeftContainer>{!!IconLeft && <IconLeft />}</IconLeftContainer>
      <Text color={textColor()}>{children}</Text>
      <IconRightContainer>{!!IconRight && <IconRight />}</IconRightContainer>
    </Container>
  );
};
