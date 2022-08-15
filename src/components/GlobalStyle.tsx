import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}


  body {
    background-color: #dedede;
    font-family: 'Noto Sans KR', sans-serif;
    height: auto;

  }

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;

  }

`;

export default GlobalStyle;
