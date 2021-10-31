import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { makeRedirectUri, startAsync } from 'expo-auth-session';
import jwtDecode from 'jwt-decode';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AUTH0_CLIENT_ID as clientId, AUTH0_DOMAIN as domain } from '@env';

type QueryParams = {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  nonce: string;
};

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<'TabOne'>) {
  const toQueryString = (params: QueryParams) => {
    return (
      '?' +
      Object.entries(params)
        .map(([key, value]) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&')
    );
  };

  const handleSuccessResponse = (res: any) => {
    const jwtToken = res.id_token;
    const decoded = jwtDecode(jwtToken) as any;
  };

  const login = async () => {
    const redirectUrl = makeRedirectUri({ useProxy: true }) + '/TabOne';
    const queryParams = toQueryString({
      client_id: clientId,
      redirect_uri: redirectUrl,
      response_type: 'id_token',
      scope: 'openid profile',
      nonce: 'nonce'
    });
    const authUrl = `${domain}/authorize${queryParams}`;
    const res = await startAsync({ authUrl });
    if (res.type === 'success') {
      handleSuccessResponse(res.params);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button onPress={login} title="hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
