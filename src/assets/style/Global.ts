import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Poppins, sans-serif;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.veryDarkViolet};
  }
  
  html {
    font-size: 18px;
  }
  html, body, #___gatsby {
    width: 100vw;
    //overflow-x: hidden;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
