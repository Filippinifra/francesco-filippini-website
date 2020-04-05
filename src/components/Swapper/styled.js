import Styled from "styled-components";

import { lifeTimeAnimation } from "../../constants/animationSettings";

import colors from "../../constants/colors";

export const FlipCardInner = Styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform ${lifeTimeAnimation / 1000}s;
    transform-style: preserve-3d;

    ${props =>
      props.animationIsActive === true
        ? `transform: ${props.rotationString};`
        : `transition: transform 0s; transform: none;`}
`;

export const FlipCard = Styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    perspective: 1000px;
`;

export const FlipCardFront = Styled.div`
    position: ${props => (props.animationIsActive ? `absolute` : `relative`)};
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: ${colors.flippingElementBgColor};
    color: ${colors.flippingElementColor};
    border-radius: 20px;
    overflow: scroll !important;
    z-index:1;
`;

export const FlipCardBack = Styled.div`
    border-radius: 20px;
    position: ${props => (props.animationIsActive ? `absolute` : `relative`)};
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: ${colors.flippingElementBgColor};
    color: ${colors.flippingElementColor};
    ${props => `transform: ${props.rotationString};`}
    overflow: scroll !important;
`;
