import { theme } from './utils/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeInterface {}
}

declare module '@env' {
  const AUTH0_DOMAIN: string;
  const AUTH0_CLIENT_ID: string;
}
