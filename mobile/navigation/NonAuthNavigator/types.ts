import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type NotAuthParamList = {
  Redirect: { token: string; provider: string };
};

export type NotAuthStackParamList = {
  Root: /*NavigatorScreenParams<NotAuthParamList> |*/ undefined;
  Login: undefined;
  Modal: undefined;
  NotFound: undefined;
  Redirect: { token: string; provider: string };
};

export type NotAuthScreenProps<Screen extends keyof NotAuthStackParamList> =
  NativeStackScreenProps<NotAuthStackParamList, Screen>;
