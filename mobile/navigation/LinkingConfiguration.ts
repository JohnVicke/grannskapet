import { LinkingOptions, getStateFromPath } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import { NotAuthStackParamList } from './NonAuthNavigator/types';

export const RootLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one'
            }
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two'
            }
          }
        }
      },
      Modal: 'modal',
      NotFound: '*'
    }
  }
};

export const NotAuthLinking: LinkingOptions<NotAuthStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: 'root',
      Login: 'login',
      Redirect: 'redirect',
      NotFound: '*'
    }
  },
  getStateFromPath: (path, opts) => {
    console.log('[getStateFromPath]:', path, opts);
    return getStateFromPath(path, opts);
  }
};
