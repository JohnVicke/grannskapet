import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { LoadingScreen } from '../screens/LoadingScreen';
import { NotAuthLinking, RootLinking } from './LinkingConfiguration';
import { NonAuthNavigator } from './NonAuthNavigator';
import { RootNavigator } from './RootNavigator';

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsAuth(true);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isAuth) {
    return (
      <NavigationContainer linking={NotAuthLinking}>
        <NonAuthNavigator />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer linking={RootLinking}>
      <RootNavigator />
    </NavigationContainer>
  );
}
