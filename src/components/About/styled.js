import Styled from "styled-components";
import screenSizes from "../../constants/screenSizes";

export const FaceImg = Styled.img`
    text-align:center;
    width: 100%;
    border-radius:50%;
    max-width: 200px;

    -webkit-box-shadow: 20px 20px 142px -42px ${(props) =>
      props.colors.contentImgShadow};
    -moz-box-shadow: 20px 20px 142px -42px ${(props) =>
      props.colors.contentImgShadow};
    box-shadow: 20px 20px 142px -42px ${(props) =>
      props.colors.contentImgShadow};
`;

export const Text = Styled.div`
    color: ${(props) => props.colors.contentColor};
    line-height: 30px;
    margin-bottom: 50px;
`;

export const ContainerAbout = Styled.div`
    position: unset !important;
    padding:80px 100px;
    background-color: ${(props) => props.colors.contentBgColor};

    @media screen and (max-width: ${screenSizes.phone}) {
        padding:60px 60px;
    }
`;

export const Card = Styled.div`
   padding:2px;
   border-radius: 5px;
   border: 1px ${(props) => props.colors.cardBorderColor} solid;
   width: 100%;
   background-color: ${(props) => props.colors.cardBgColor};
   max-width: 200px;
   margin:auto;
   -webkit-box-shadow: 20px 20px 142px -42px ${(props) =>
     props.colors.contentImgShadow};
    -moz-box-shadow: 20px 20px 142px -42px ${(props) =>
      props.colors.contentImgShadow};
    box-shadow: 20px 20px 142px -42px ${(props) =>
      props.colors.contentImgShadow};
`;

export const CardContent = Styled.div`
    display: inline-flex;
    align-items: center;
`;

export const CardHeader = Styled.div`
    margin-bottom: 2px;
`;

export const ImgCVPreview = Styled.img`
    height:100%;
    width:100%;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
`;

export const ImgDownload = Styled.img`
    height: 25px;
    width: 25px;
    margin-right: 5px;
`;

export const DownloadLabel = Styled.div`
    font-size: 12px;
`;

export const LinkCard = Styled.a`
    color: ${(props) => props.colors.cardLinkColor};
`;

export const ContainerImg = Styled.div`
    width: 100%;
    margin: auto;
    max-width: 200px;
`;
