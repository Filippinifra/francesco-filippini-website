import Styled from 'styled-components';

export const Wrapper = Styled.div`
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
`;

export const InnerBox = Styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${Wrapper}:hover & {
        transform: rotateY(180deg);
    }
`;

export const FrontBox = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export const BackBox = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const FlippingImg = Styled.img`
    text-align:center;
    width: 100%;
    border-radius:50%;

    -webkit-box-shadow: 20px 20px 142px -42px ${({ colors }) => colors.contentImgShadow};
    -moz-box-shadow: 20px 20px 142px -42px ${(colors) => colors.contentImgShadow};
    box-shadow: 20px 20px 142px -42px ${(colors) => colors.contentImgShadow};
`;
