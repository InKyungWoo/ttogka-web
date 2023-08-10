import { createGlobalStyle } from "styled-components";

// fonts
import HappinessSans from "../assets/fonts/Happiness-Sans-Title.woff2";
import HappinessSansRegular from "../assets/fonts/Happiness-Sans-Regular.woff2";
import HappinessSansBold from "../assets/fonts/Happiness-Sans-Bold.woff2";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Happiness-Sans';
    src: local('HappinessSans') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Happiness-Sans';
    src: local('HappinessSansRegular') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Happiness-Sans';
    src: local('HappinessSansBold') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Happiness-Sans';
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
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
  }

  @media (min-width: 480px) {
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
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
