import React from 'react';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Layout } from '../components/Layout';

interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <Layout>
      <Button IconLeft={() => <Icon name="facebook" />}>Logga in</Button>
      <Button variant="outlined">Logga in</Button>
      <Icon name="facebook" size={20} />
      <Icon name="google" size={20} />
    </Layout>
  );
};
