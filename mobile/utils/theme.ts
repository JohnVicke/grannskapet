export const colors = {
  primary: '#33A962',
  background: '#FBFFFA',
  white: '#fff',
  gray: '#5C5C5C'
};

const space = [4, 8, 16, 24, 32, 64, 128].map((val) => val + 'px');

export const theme = {
  space,
  colors,
  border: {
    defaultRadius: '5px',
    default: `2px solid ${colors.gray}`
  }
};
