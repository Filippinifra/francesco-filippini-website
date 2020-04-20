import Styled from "styled-components";

import colors from "../../constants/colors";

export const FooterContainer = Styled.div`
    bottom:0;
    position: fixed;
    width: 100%;
    text-align: center;
    background-color: ${colors.footerBgColor};
    -webkit-box-shadow: 0px -5px 64px 4px ${colors.footerShade};
    -moz-box-shadow: 0px -5px 64px 4px ${colors.footerShade};
    box-shadow: 0px -5px 64px 4px ${colors.footerShade};
`;

export const HeaderContainer = Styled.div`
    position: fixed;
    width: 100%;
    z-index:1;
`;

export const ContentContainer = Styled.div`
    width: 100%;
    overflow: scroll;
    max-width: 1500px;
    margin: 50px auto 33px;
`;
