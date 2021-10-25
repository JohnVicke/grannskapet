import { NavigatorScreenParams } from '@react-navigation/native';

export type NotAuthParamList = {
  NotAuthRoot: undefined;
};
export type NotAuthStackParamList = {
  Root: NavigatorScreenParams<NotAuthParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};
