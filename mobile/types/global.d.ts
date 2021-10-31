import { theme } from '../utils/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeInterface {}
}

declare module '@env' {
  export const AUTH0_DOMAIN: string;
  export const AUTH0_CLIENT_ID: string;
  export const AUTH0_AUDIENCE: string;
}
