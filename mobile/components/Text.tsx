import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/theme';

interface TextProps {
  children: React.ReactNode;
  header?: boolean;
  color?: string;
}

type StyledTextProps = Partial<TextProps> & {};

const StyledText = styled.Text<StyledTextProps>`
  font-family: ${(props) =>
    props.header ? 'playfair-bold' : 'raleway-regular'};
  color: ${(props) => props.color};
`;

export const Text: React.FC<TextProps> = ({
  header = false,
  children,
  color = colors.black
}) => {
  return (
    <StyledText header={header} color={color}>
      {children}
    </StyledText>
  );
};
