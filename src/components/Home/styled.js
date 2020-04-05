import Styled from "styled-components";

import colors from "../../constants/colors";
import screenSizes from "../../constants/screenSizes";

export const FaceImg = Styled.img`
    text-align:center;
    width: 200px;
    border-radius:50%;
    float: left;
    margin-bottom: 10px;
    margin-right: 30px;

    @media screen and (max-width: ${screenSizes.phone}) {
        width: 150px;
    }
`;

export const Text = Styled.div`
    color: ${colors.flippingElementColor};
    line-height: 25px;
`;

export const ContainerHome = Styled.div`
   padding:30px;
`;

export const Card = Styled.div`
   padding:2px;
   border-radius: 10px;
   border: 1px ${colors.cardBorderColor} solid;
   width: 250px;
   background-color: ${colors.cardBgColor};
`;

export const CardContent = Styled.div`
    display: inline-flex;
`;

export const CardHeader = Styled.div`
    margin-bottom: 2px;
`;

export const ImgCVPreview = Styled.img`
    height:100%;
    width:100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const ImgDownload = Styled.img`
    height: 25px;
    width: 25px;
    margin-right: 5px;
`;

export const DownloadLabel = Styled.div`
    font-size: 20px;
`;

export const LinkCard = Styled.a`
    float: right;
    margin-top: 200px;
    color: ${colors.cardLinkColor};
`;
