import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import screenSizes from 'constants/screenSizes';

export const WrapperContacts = styled.div`
  position: unset !important;
  padding: 80px 100px;
  background-color: ${({ colors }) => colors.contentBgColor};

  @media screen and (max-width: ${screenSizes.phone}px) {
    padding: 60px 30px 80px;
  }
`;

export const GridRow = styled(Grid)`
  height: 100%;
`;

export const GridItem = styled(Grid)`
  width: 100%;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
  max-width: 120px;
`;

export const TextInformation = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  word-wrap: break-word;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ colors }) => colors.contentColor};
`;

export const ContentCentered = styled.div`
  text-align: center;
`;

export const WrapperImgAndText = styled.div`
  padding: 20px;

  :hover {
    filter: brightness(80%);
  }
`;

export const WrapperImg = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;
