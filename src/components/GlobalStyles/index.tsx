import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Poppins';
    color: #000000;
  }
`;

export default GlobalStyles;
