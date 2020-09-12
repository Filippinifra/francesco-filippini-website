import { createGlobalStyle } from 'styled-components';

import typography from 'constants/typography';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${typography.fontFamily} !important;
        background-color: ${({ colors }) => colors.bodyBgColor};
        height: 100vh;
        width: 100%;
    }
  
    code {
        font-family: ${typography.fontFamily} !important;
    }

    *{
        ::selection{
            background-color: ${({ colors }) => colors.selectionBgColor};
            color: ${({ colors }) => colors.selectionColor};
        }
    }
`;

export default GlobalStyle;
