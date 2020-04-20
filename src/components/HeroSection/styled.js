import Styled from "styled-components";
import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const ContainerHeroSection = Styled.div`
    width: 100%;
    background-color: ${colors.heroSectionBgColor};
    color: ${colors.heroSectionColor};
    padding: 200px 0;
`;

export const TextLeft = Styled.div`
    text-align: right;
    font-size: 13px;
    margin-top: 15px;

    @media screen and (max-width: ${screenSizes.tablet}) {
        text-align: center;
        margin-top: 0;
        margin-bottom: 20px;
    }
`;

export const TextCenter = Styled.div`
    text-align: center;
    font-size: 35px;
`;