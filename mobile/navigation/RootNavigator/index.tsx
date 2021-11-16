import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ModalScreen from '../../screens/ModalScreen';
import NotFoundScreen from '../../screens/NotFoundScreen';
import TabOneScreen from '../../screens/TabOneScreen';
import TabTwoScreen from '../../screens/TabTwoScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from './types';
import { Icon } from '../../components/Icon';

const { Navigator, Screen, Group } =
  createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="facebook" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: () => <Icon name="google" />
        }}
      />
    </Navigator>
  );
};

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

export const RootNavigator: React.FC = () => {
  const { Navigator, Group, Screen } =
    createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator>
      <Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
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
