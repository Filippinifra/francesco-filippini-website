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

export const LinkDownload = Styled.a`
    text-decoration: none;   
`;

export const ContainerImg = Styled.div`
    width: 100%;
    margin: auto;
    max-width: 200px;
`;

export const ContainerDownloadElement = Styled.div`
    width: 100%;
    text-align: center;
`;

export const ImageCurriculum = Styled.img`
    width: 100%;
    max-width: 120px;
`;

export const LabelDownload = Styled.div`
    margin-top: 20px;
    color: ${(props) => props.colors.downloadLabelColor};
`;
