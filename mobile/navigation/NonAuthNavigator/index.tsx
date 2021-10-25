import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoadingScreen } from '../../screens/LoadingScreen';
import ModalScreen from '../../screens/ModalScreen';
import NotFoundScreen from '../../screens/NotFoundScreen';
import { NotAuthStackParamList } from './types';

export const NonAuthNavigator: React.FC = () => {
  const { Screen, Navigator, Group } =
    createNativeStackNavigator<NotAuthStackParamList>();
  return (
    <Navigator>
      <Screen name="Root" component={LoadingScreen} />
      <Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name="Modal" component={ModalScreen} />
      </Group>
    </Navigator>
  );
};