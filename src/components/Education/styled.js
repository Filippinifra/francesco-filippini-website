import Styled from "styled-components";
import Image from "react-graceful-image";

import colors from "../../constants/colors";

export const ContainerHome = Styled.div`
   padding: 50px 30px;
`;

export const Text = Styled.div`
    color: ${colors.flippingElementColor};
    line-height: 25px;
    margin-top: 30px;
`;

export const ContainerImg = Styled.div`
    Width: 100%;
    text-align: center;
`;

export const LogoImg = Styled(Image)`
    text-align:center;
    width: 100%;
    border-radius:50%;
    max-width: 200px;

    -webkit-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    -moz-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
`;

export const StrongTitle = Styled.div`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${colors.flippingElementColor};
`;

export const MediumTitle = Styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 3px;
    color: ${colors.flippingElementColor};
`;

export const ContainerGrid = Styled.div`
    margin-bottom: 50px;
`;
