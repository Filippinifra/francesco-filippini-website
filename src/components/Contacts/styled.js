import Styled from "styled-components";
import { Grid } from "@material-ui/core";
import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const RowContact = Styled.div`
    height:50%;
    @media screen and (max-width: ${screenSizes.phone}) {
        height: auto;
    }
`;

export const ContainerContacts = Styled.div`
    padding: 50px 100px;
    height: calc(100% - 100px);

    @media screen and (max-width: ${screenSizes.tablet}) {
        padding: 20px 50px;
        height: calc(100% - 40px);
    }

    @media screen and (max-width: ${screenSizes.phone}) {
        padding: 0;
        height: 100%;
        width: 100%;
    }
`;

export const GridRow = Styled(Grid)`
    height: 100%;
`;

export const GridItem = Styled(Grid)`
    width:50%;
    height: 100%;

    @media screen and (max-width: ${screenSizes.phone}) {
        padding: 10px;
        height: calc(100%-20px);
        width: calc(100%-20px);
    }
`;

export const Icon = Styled.img`
    height: 100%;
    width:100%;

    @media screen and (max-width: ${screenSizes.phone}) {
        width: 50%;
    }
`;

export const TextInformation = Styled.div`
    font-size: 20px;
    text-align:center;
    width: 100%;
    margin: 0 auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;

    @media screen and (max-width: ${screenSizes.tablet}) {
        font-size: 15px;
    }

    @media screen and (max-width: ${screenSizes.phone}) {
        font-size: 25px;
        margin: auto;
    }
`;

export const Link = Styled.a`
    text-decoration: none;
    color: ${colors.flippingElementColor};

    @media screen and (max-width: ${screenSizes.phone}) {
        display:flex;
    }
`;

export const ContentCentered = Styled.div`
    text-align: center;
`;

export const ContainerImgAndText = Styled.div`
    padding: 20px;
    height: calc(100% - 40px);
    width: calc(100% - 40px);

    @media screen and (max-width: ${screenSizes.phone}) {
        padding: 0;
        height: 100%;
        width: 100%;
    }
`;

export const WrapperImg = Styled.div`
    height: calc(80% - 40px);
    text-align: center;
    padding: 20px;
`;

export const TextContainer = Styled.div`
    width:100%;
`;
