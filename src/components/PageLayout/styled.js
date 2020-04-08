import Styled from "styled-components";

import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const CentralContainer = Styled.div`
    height: calc(100% - 160px);
    width: calc(100% - 160px);
    margin-left:80px;
    margin-top:95px;
    margin-bottom: 65px;

    @media screen and (max-width: ${screenSizes.phone}) {
        width: calc(100% - 80px);
        margin-left:40px;
    }
`;

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
