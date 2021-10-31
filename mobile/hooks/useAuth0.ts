import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_AUDIENCE } from '@env';
import { useNavigation } from '@react-navigation/core';
import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { setItemAsync } from 'expo-secure-store';

type QueryParams = {
  [key: string]: string;
};

export const useAuth0 = () => {
  const navigation = useNavigation();

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

  const auth0LoginScreen = async () => {
    const redirectUrl = makeRedirectUri({ useProxy: true });
    const queryParams = toQueryString({
      client_id: AUTH0_CLIENT_ID,
      redirect_uri: redirectUrl,
      response_type: 'token id_token',
      scope: 'openid profile',
      nonce: 'nonce',
      audience: AUTH0_AUDIENCE
    });
    const authUrl = `https://${AUTH0_DOMAIN}/authorize${queryParams}`;
    const res = await startAsync({ authUrl });
    console.log(res);
    if (res.type === 'success') {
      console.log(res);
      await setItemAsync('token', res.params.access_token);
      // Enable navigation from here if correct login
      navigation.navigate('NotFound');
    }
  };

  return { auth0LoginScreen };
};
