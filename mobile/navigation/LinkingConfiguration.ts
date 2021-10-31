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
    const split = path.split('#');
    if (split[0].startsWith('expo-auth-session')) {
      const params = {
        provider: '',
        token: ''
      };
      if (split[1].includes('id_token')) {
        params.provider = 'google';
        params.token = split[1].split('=')[1];
      } else if (split[1].includes('access_token')) {
        params.provider = 'facebook';
        params.token = split[1].split('&')[0].split('=')[1];
      }
      return {
        routes: [
          {
            name: 'Redirect',
            path: 'redirect',
            params
          }
        ]
      };
    }
    return getStateFromPath(path, opts);
  }
};
