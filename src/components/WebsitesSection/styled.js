import styled from 'styled-components';
import screenSizes from 'constants/screenSizes';

export const WrapperWebsites = styled.div`
  position: unset !important;
  padding: 80px 100px;
  background-color: ${({ colors }) => colors.contentBgColor};

  @media screen and (max-width: ${screenSizes.phone}px) {
    padding: 60px 30px;
  }
`;

export const Text = styled.div`
  color: ${({ colors }) => colors.contentColor};
  margin-bottom: 50px;
`;

export const WrapperScrollingSnap = styled.div`
  position: relative;
  margin-top: 100px;
  width: 100%;

  -webkit-scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
  -webkit-scroll-snap-destination: 50% 50%;
  scroll-snap-destination: 50% 50%;

  height: 420px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperScrollElement = styled.div`
  height: 100%;
  padding-left: calc(50% - 120px);
  padding-right: calc(50% - 120px);
  width: ${({ numberOfElement }) => numberOfElement * 240}px;
`;

export const ElementScrolling = styled.div`
  -webkit-scroll-snap-coordinate: 50% 50%;
  scroll-snap-coordinate: 50% 50%;
  scroll-snap-align: center;

  width: 200px;
  height: 400px;
  margin: auto 20px;

  display: inline-block;
`;

export const WrapperFrame = styled.div`
  margin-top: 50px;
  text-align: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const PhoneFrame = styled.img`
  height: 400px;
`;

export const ImgScrolling = styled.img`
  height: 340px;
  width: 160px;
  padding: 30px 20px;
`;
