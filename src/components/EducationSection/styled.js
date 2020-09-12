import Styled from "styled-components";
import screenSizes from "constants/screenSizes";

export const ContainerEducation = Styled.div`
    position: unset !important;
    padding:80px 100px;
    background-color: ${({ colors }) => colors.contentBgColor};

    @media screen and (max-width: ${screenSizes.phone}px) {
        padding:60px 60px;
    }
`;

export const Text = Styled.div`
    color: ${({ colors }) => colors.contentColor};
    line-height: 25px;
    margin-top: 50px;
`;

export const ContainerImg = Styled.div`
    width: 100%;
    margin: auto;
    max-width: 150px;
`;

export const LogoImg = Styled.img`
    text-align:center;
    width: 100%;
    border-radius:50%;
    max-width: 200px;

    -webkit-box-shadow: 20px 20px 142px -42px ${({ colors }) =>
      colors.contentImgShadow};
    -moz-box-shadow: 20px 20px 142px -42px ${({ colors }) =>
      colors.contentImgShadow};
    box-shadow: 20px 20px 142px -42px ${({ colors }) =>
      colors.contentImgShadow};
`;

export const StrongTitle = Styled.div`
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${({ colors }) => colors.contentColor};
`;

export const MediumTitle = Styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 3px;
    color: ${({ colors }) => colors.contentColor};
`;

export const ContainerGrid = Styled.div`
    margin-bottom: 50px;
`;

export const ImgSectionGallery = Styled.img`
    width: 100%;
`;

export const ContainerGallery = Styled.div`
    margin-top: 50px;
`;
