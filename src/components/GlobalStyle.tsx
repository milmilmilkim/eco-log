import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #dedede;
  }

  * {
    box-sizing: content-box;
  }

`;

export default GlobalStyle;
