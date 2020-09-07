import React from "react";

import {
  Curtain,
  CurtainLeftPanel,
  CurtainContent,
  CurtainWrapper,
  CurtainRightPanel,
  LeftTitle,
  RightTitle,
} from "./styled.js";

import { leftPanelText, rightPanelText } from "constants/commonsCurtain";

export const CurtainOpening = ({ isloading, children, colors }) => (
  <Curtain>
    <CurtainWrapper>
      <CurtainLeftPanel loaded={isloading} colors={colors}>
        <LeftTitle colors={colors}>{leftPanelText}</LeftTitle>
      </CurtainLeftPanel>
      <CurtainContent>{children}</CurtainContent>
      <CurtainRightPanel colors={colors} loaded={isloading}>
        <RightTitle colors={colors}>{rightPanelText}</RightTitle>
      </CurtainRightPanel>
    </CurtainWrapper>
  </Curtain>
);
