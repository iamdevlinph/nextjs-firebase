import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', Arial, sans-serif;
    font-size: 16px;
  }

  html {
    overflow-y: scroll;
  }

  .pointer {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default GlobalStyle;
