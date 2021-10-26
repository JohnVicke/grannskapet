import React from 'react';
import styled from 'styled-components/native';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledView = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};
