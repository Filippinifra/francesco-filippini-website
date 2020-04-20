import Styled from "styled-components";
import { Grid } from "@material-ui/core";
import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const ContainerContacts = Styled.div`
    position: unset !important;
    padding:80px 100px;
    background-color: ${colors.contentBgColor};

    @media screen and (max-width: ${screenSizes.phone}) {
        padding:60px 60px 80px;
    }
`;

export const GridRow = Styled(Grid)`
    height: 100%;
`;

export const GridItem = Styled(Grid)`
    width:100%;
`;

export const Icon = Styled.img`
    height: 100%;
    width:100%;
    max-width: 120px;
`;

export const TextInformation = Styled.div`
    font-size: 20px;
    text-align:center;
    width: 100%;
    margin: 0 auto;
    word-wrap: break-word;
`;

export const Link = Styled.a`
    text-decoration: none;
    color: ${colors.flippingElementColor};
`;

export const ContentCentered = Styled.div`
    text-align: center;
`;

export const ContainerImgAndText = Styled.div`
    padding: 20px;
`;

export const WrapperImg = Styled.div`
    text-align: center;
    padding: 20px;
`;

export const TextContainer = Styled.div`
    width:100%;
`;
