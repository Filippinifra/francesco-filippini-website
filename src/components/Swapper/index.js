import React from "react";

import { FlipCard, FlipCardInner, FlipCardFront, FlipCardBack } from "./styled";

const Swapper = ({
  currentElement,
  nextElement,
  animationIsActive,
  rotationString
}) => (
  <FlipCard>
    <FlipCardInner
      animationIsActive={animationIsActive}
      rotationString={rotationString}
    >
      <FlipCardFront animationIsActive={animationIsActive}>
        {currentElement}
      </FlipCardFront>
      <FlipCardBack
        animationIsActive={animationIsActive}
        rotationString={rotationString}
      >
        {nextElement}
      </FlipCardBack>
    </FlipCardInner>
  </FlipCard>
);

export default Swapper;
