import { extendTheme } from 'native-base';

export const colors = {
  primary: '#33A962',
  background: '#FBFFFA',
  white: '#fff',
  gray: '#5C5C5C',
  error: '#EC6C6C',
  black: '#1F1F1F',
  disabled: 'rgba(51, 169, 98, 0.5)'
};

export const space = [4, 8, 16, 24, 32, 64, 128];

export const theme = {
  space: space.map((val) => val + 'px'),
  colors,
  border: {
    defaultRadius: '5px',
    default: `2px solid ${colors.gray}`
  },
  boxShadow: {
    default: '0px 2px 6px 1px rgba(26, 88, 21, 0.1)'
  }
};

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
};

export default extendTheme({ config });
