import { createGlobalStyle } from "styled-components";
import "../assets/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Happiness-Sans";
  }

  html {
    font-size: 62.5%
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 479px) {
    body {
      min-height: 100vh;
    }
  }

  @media (min-width: 480px) {
    body {
      background-color: white;
    }

    #root {
      width: 100vw;
      max-width: 479px;
      height: 100vh;
      margin: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;

export default GlobalStyle;
