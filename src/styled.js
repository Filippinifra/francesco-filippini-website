import { createGlobalStyle } from "styled-components";

import colors from "./constants/colors";
import typography from "./constants/typography";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${typography.fontFamily} !important;
        background-color: ${colors.bodyBgColor};
        height: 100vh;
        width: 100%;
    }
  
    code {
        font-family: ${typography.fontFamily} !important;
    }

    *{
        ::selection{
            background-color: ${colors.selectionBgColor};
            color: ${colors.selectionColor};
        }
    }

    ::-webkit-scrollbar {
        display:none;
    }
`;

export default GlobalStyle;
