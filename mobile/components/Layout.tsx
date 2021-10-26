import React from 'react';
import styled from 'styled-components/native';

interface LayoutProps {
  children: React.ReactNode;
}

const Margin = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;

const Background = styled.View`
  background-color: ${({ theme: { colors } }) => colors.background};
  height: 100%;
  width: 100%;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Background>
      <Margin>{children}</Margin>
    </Background>
  );
};
