import Styled from "styled-components";
import { Grid } from "@material-ui/core";
import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const RowContact = Styled.div`
    height:50%;
`;

export const ContainerContacts = Styled.div`
    padding: 50px 100px;
    height: -webkit-fill-available;

    @media screen and (max-width: ${screenSizes.tablet}) {
        padding: 30px 60px;
    }

    @media screen and (max-width: ${screenSizes.tablet}) {
        padding: 20px 30px;
    }
`;

export const GridRow = Styled(Grid)`
    height: 100%;
`;

export const GridItem = Styled(Grid)`
    width:50%;
`;

export const Icon = Styled.img`
    height: fit-content;

    @media screen and (max-width: ${screenSizes.tablet}) {
        height: 100px;
    }
`;

export const TextInformation = Styled.div`
    font-size: 20px;
    text-align:center;
    max-width: fit-content;
    margin: 0 auto;

    @media screen and (max-width: ${screenSizes.tablet}) {
        font-size: 15px;
    }

    @media screen and (max-width: ${screenSizes.phone}) {
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
