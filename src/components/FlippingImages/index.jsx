import { useTheme } from 'hook/useTheme';
import React from 'react';

import { Wrapper, FrontBox, BackBox, InnerBox, FlippingImg } from './styled';

export const FlippingImages = ({ imgFront, imgBack, size }) => {
  const { colors } = useTheme();

  return (
    <Wrapper size={size}>
      <InnerBox>
        <FrontBox>
          <FlippingImg src={imgFront} colors={colors} alt="flippingImageFront" />
        </FrontBox>
        <BackBox>
          <FlippingImg src={imgBack} colors={colors} alt="flippingImageBack" />
        </BackBox>
      </InnerBox>
    </Wrapper>
  );
};
