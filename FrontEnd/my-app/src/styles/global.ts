import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Barlow', Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  html {
    overflow: hidden
  }

  body {
    background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
    box-sizing: border-box;
  }
`;
