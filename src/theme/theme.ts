import { DefaultTheme } from 'styled-components';

const colors = {
  neonGreen: '#CCF381',
  neonBlue: '#4831D4',
  redOrange: '#EE4E34',
  ivory: '#f5f5f5 ',
  black: '#0C0910',
  iceBlue: '#D3E7FF',
};

const deviceSizes = {
  mobile: `(max-width: 755px)`,
  tablet: `(max-width: 1023px)`,
  desktop: `(max-width: 1279px)`,
};

export const theme: DefaultTheme = {
  colors,
  deviceSizes,
};
