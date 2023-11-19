import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@600&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;0,800;0,1000;1,200;1,400&family=Poppins:wght@300;400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito , sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: IBM Plex Serif , serif;
  }

  a {
    text-decoration: none;
  }
`;
