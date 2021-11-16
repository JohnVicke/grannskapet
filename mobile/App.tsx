import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getItemAsync } from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import nativeBaseTheme, { theme } from './utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message));
});

const uri = 'http://192.168.1.215:42069/graphql';

const httpLink = new HttpLink({
  uri
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getItemAsync('token');
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
          </SafeAreaProvider>
          <StatusBar />
        </ThemeProvider>
      </ApolloProvider>
    </NativeBaseProvider>
  );
}
