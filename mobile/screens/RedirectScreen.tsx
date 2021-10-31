import jwtDecode from 'jwt-decode';
import React from 'react';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { useMeQuery } from '../generated/graphql';
import { NotAuthScreenProps } from '../navigation/NonAuthNavigator/types';

interface RedirectScreenProps extends NotAuthScreenProps<'Redirect'> {}

export const RedirectScreen: React.FC<RedirectScreenProps> = ({ route }) => {
  const { data, loading, error } = useMeQuery();
  console.log(data, error);
  return (
    <Layout>
      <Text>hello world</Text>
    </Layout>
  );
};
