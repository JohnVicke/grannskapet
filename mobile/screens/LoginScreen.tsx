import React from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <Layout>
      <Button>Logga in</Button>
    </Layout>
  );
};
