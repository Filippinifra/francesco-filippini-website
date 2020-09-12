import React from 'react';

import { isMobileOnly, isTablet, isIOS, isIPad13, isIPhone13, isIPod13 } from 'react-device-detect';

import { Parallax } from './styled';

import { ContentDivider } from 'components/ContentDivider';

export const ParallaxElemenet = ({ imgSrc, colors }) => {
  const conditionNoParallax = isMobileOnly || isTablet || isIOS || isIPhone13 || isIPad13 || isIPod13;
  return conditionNoParallax ? <ContentDivider colors={colors} /> : <Parallax imgSrc={imgSrc} />;
};
