import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins:wght@300;400;600;700&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto , sans-serif;
  }

  h1, h2 {
    font-family: Open Sans , serif-serif;
  }

  p {
    font-family: Open Sans , sans-serif;
  }

  a {
    text-decoration: none;
  }

`;
