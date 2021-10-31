import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoadingScreen } from '../../screens/LoadingScreen';
import { LoginScreen } from '../../screens/LoginScreen';
import NotFoundScreen from '../../screens/NotFoundScreen';
import { RedirectScreen } from '../../screens/RedirectScreen';
import { NotAuthStackParamList } from './types';

export const NonAuthNavigator: React.FC = () => {
  const { Screen, Navigator, Group } =
    createNativeStackNavigator<NotAuthStackParamList>();
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Root" component={LoadingScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Redirect" component={RedirectScreen} />
      <Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'oops' }}
      />
    </Navigator>
  );
};
