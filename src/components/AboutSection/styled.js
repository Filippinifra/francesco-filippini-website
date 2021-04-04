import styled from 'styled-components';
import screenSizes from 'constants/screenSizes';

export const Text = styled.div`
  color: ${({ colors }) => colors.contentColor};
  line-height: 30px;
  margin-bottom: 50px;
`;

export const WrapperAbout = styled.div`
  position: unset !important;
  padding: 80px 100px;
  background-color: ${({ colors }) => colors.contentBgColor};

  @media screen and (max-width: ${screenSizes.phone}px) {
    padding: 60px 30px;
  }
`;

export const LinkDownload = styled.a`
  text-decoration: none;
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperDownloadElement = styled.div`
  width: 100%;
  text-align: center;

  :hover {
    filter: brightness(80%);
  }
`;

export const ImageCurriculum = styled.img`
  width: 100%;
  max-width: 120px;
`;

export const LabelDownload = styled.div`
  margin-top: 20px;
  color: ${({ colors }) => colors.downloadLabelColor};
`;
