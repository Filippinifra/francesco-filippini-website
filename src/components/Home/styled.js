import Styled from "styled-components";
import Image from "react-graceful-image";
import colors from "../../constants/colors";

export const FaceImg = Styled(Image)`
    text-align:center;
    width: 100%;
    border-radius:50%;
    max-width: 200px;

    -webkit-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    -moz-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
`;

export const Text = Styled.div`
    color: ${colors.flippingElementColor};
    line-height: 25px;
    margin-bottom: 30px;
`;

export const ContainerHome = Styled.div`
   padding:50px 30px;
`;

export const Card = Styled.div`
   padding:2px;
   border-radius: 10px;
   border: 1px ${colors.cardBorderColor} solid;
   width: 100%;
   background-color: ${colors.cardBgColor};
   max-width: 200px;
   margin:auto;
   -webkit-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    -moz-box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
    box-shadow: 20px 20px 142px -42px ${colors.flippinImgShadowColor};
`;

export const CardContent = Styled.div`
    display: inline-flex;
    align-items: center;
`;

export const CardHeader = Styled.div`
    margin-bottom: 2px;
`;

export const ImgCVPreview = Styled(Image)`
    height:100%;
    width:100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const ImgDownload = Styled(Image)`
    height: 25px;
    width: 25px;
    margin-right: 5px;
`;

export const DownloadLabel = Styled.div`
    font-size: 12px;
`;

export const LinkCard = Styled.a`
    color: ${colors.cardLinkColor};
`;

export const ContainerImg = Styled.div`
    Width: 100%;
    text-align: center;
`;
