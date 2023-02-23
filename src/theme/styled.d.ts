import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neonGreen: string;
      neonBlue: string;
      redOrange: string;
      ivory: string;
    };
    deviceSizes: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
