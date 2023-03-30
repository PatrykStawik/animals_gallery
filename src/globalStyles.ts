import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
  }

  a {
    all: unset;
    cursor: pointer;
  }
`;
