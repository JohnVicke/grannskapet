import React from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';

interface ButtonProps {
  children: React.ReactNode;
  IconLeft?: React.FC;
  IconRight?: React.FC;
  variant?: 'filled' | 'outlined';
  fullWidth?: boolean;
}

type ContainerProps = Partial<ButtonProps> & {
  hasIcon: boolean;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  align-self: flex-start;
  padding: 10px;
  width: ${(props) => (!props.fullWidth ? '100%' : 'auto')};
  border-radius: ${(props) => props.theme.border.defaultRadius};
  background-color: ${(props) =>
    props.variant === 'filled'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  border: ${(props) =>
    props.variant === 'outlined' ? props.theme.border.default : 'none'};

  display: flex;
  align-items: center;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  fullWidth = false,
  IconLeft,
  IconRight
}) => {
  const textColor = () => {
    if (variant === 'filled') return '#fff';
  };
  const hasIcon = !!IconLeft || !!IconRight;

  return (
    <Container fullWidth={fullWidth} variant={variant} hasIcon={hasIcon}>
      {!!IconLeft && <IconLeft />}
      <Text color={textColor()}>{children}</Text>
      {!!IconRight && <IconRight />}
    </Container>
  );
};
