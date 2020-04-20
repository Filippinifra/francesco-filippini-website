import React from "react";

import { isMobileOnly } from "react-device-detect";

import { Parallax } from "./styled";

import ContentDivider from "../ContentDivider";

const ParallaxElemenet = ({ imgSrc }) =>
  isMobileOnly ? <ContentDivider /> : <Parallax imgSrc={imgSrc} />;

export default ParallaxElemenet;
