import React from 'react';
import { Icon } from '../components/Icon';
import { Layout } from '../components/Layout';
import { NotAuthScreenProps } from '../navigation/NonAuthNavigator/types';

// interface LoadingScreenProps extends NotAuthScreenProps<'Redirect'> {}
interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <Layout>
      <Icon name="facebook" size={20} />
      <Icon name="google" size={20} />
    </Layout>
  );
};
