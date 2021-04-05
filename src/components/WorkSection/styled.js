import styled from 'styled-components';
import screenSizes from 'constants/screenSizes';

export const WrapperWork = styled.div`
  padding: 80px 100px;
  background-color: ${({ colors }) => colors.contentBgColor};

  @media screen and (max-width: ${screenSizes.phone}px) {
    padding: 60px 30px;
  }
`;

export const Text = styled.div`
  color: ${({ colors }) => colors.contentColor};
  line-height: 25px;
  margin-top: 50px;
`;

export const WrapperImg = styled.div`
  width: 100%;
  margin: auto;
  max-width: 150px;
`;

export const LogoImg = styled.img`
  text-align: center;
  width: 100%;
  border-radius: 50%;
  max-width: 200px;

  -webkit-box-shadow: 20px 20px 142px -42px ${({ colors }) => colors.contentImgShadow};
  -moz-box-shadow: 20px 20px 142px -42px ${({ colors }) => colors.contentImgShadow};
  box-shadow: 20px 20px 142px -42px ${({ colors }) => colors.contentImgShadow};
`;

export const StrongTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${({ colors }) => colors.contentColor};
`;

export const MediumTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
  color: ${({ colors }) => colors.contentColor};
`;

export const WrapperGrid = styled.div`
  margin-bottom: 50px;
`;

export const ImgSectionGallery = styled.img`
  width: 100%;
`;

export const WrapperGallery = styled.div`
  margin-top: 80px;
`;

export const ToolsText = styled.div`
  font-weight: 700;
  margin: 50px 0 3px 10px;
  color: ${({ colors }) => colors.toolsTitleColor};
`;

export const StackRowWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
