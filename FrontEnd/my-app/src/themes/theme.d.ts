import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      GENERAL: {
        PRIMARY: string;
        SECONDARY: string;
        TERTIARY: string;
      };
      BACKGROUND: {
        WHITE: string;
        BLACK: string;
      };
      TEXT: {
        GREY: string;
        CLEAR_GREY: string;
        CONTRAST_ONE: string;
        CONTRAST_TWO: string;
      };
    };
  }
}
