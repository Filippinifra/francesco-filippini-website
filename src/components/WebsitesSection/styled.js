import Styled from 'styled-components';
import screenSizes from 'constants/screenSizes';

export const ContainerWebsites = Styled.div`
    position: unset !important;
    padding:80px 100px;
    background-color: ${({ colors }) => colors.contentBgColor};

    @media screen and (max-width: ${screenSizes.phone}px) {
        padding:60px 60px;
    }
`;

export const Text = Styled.div`
    color: ${({ colors }) => colors.contentColor};
    margin-bottom: 50px;
`;

export const ContainerScrollingSnap = Styled.div`
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
`;

export const ContainerScrollElement = Styled.div`
    height: 100%;
    padding-left: calc(50% - 120px);
    padding-right: calc(50% - 120px);
    width: ${({ numberOfElement }) => numberOfElement * 240}px;
`;

export const ElementScrolling = Styled.div`
    -webkit-scroll-snap-coordinate: 50% 50%;
    scroll-snap-coordinate: 50% 50%;
    scroll-snap-align: center;

    width: 200px;
    height: 400px;
    margin: auto 20px;
    
    display: inline-block;
`;

export const ContainerFrame = Styled.div`
    margin-top: 50px;
    text-align: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;

export const PhoneFrame = Styled.img`
    height: 400px;
`;

export const ImgScrolling = Styled.img`
    height: 340px;
    width: 160px;
    padding: 30px 20px;
`;
