import { createGlobalStyle } from "styled-components";

import typography from "./constants/typography";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${typography.fontFamily} !important;
        background-color: ${(props) => props.colors.bodyBgColor};
        height: 100vh;
        width: 100%;
    }
  
    code {
        font-family: ${typography.fontFamily} !important;
    }

    *{
        ::selection{
            background-color: ${(props) => props.colors.selectionBgColor};
            color: ${(props) => props.colors.selectionColor};
        }
    }
`;

export default GlobalStyle;
