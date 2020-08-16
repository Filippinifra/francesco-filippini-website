import React from "react";

import {
  ContainerWebsites,
  Text,
  ContainerScrollingSnap,
  ElementScrolling,
  ContainerScrollElement,
  PhoneFrame,
  ContainerFrame,
  ImgScrolling,
} from "./styled";

import blackFramePhone from "../../img/phoneFrameBlack.png";
import whiteFramePhone from "../../img/phoneFrameWhite.png";

import { commonsWebsite } from "../../constants/commonsWebsites";

export const Websites = ({ lightIsOn, colors }) => {
  const { texts, imagesPreview } = commonsWebsite;

  const getRightFrame = () => (lightIsOn ? blackFramePhone : whiteFramePhone);

  return (
    <ContainerWebsites colors={colors}>
      {texts.map((text) => (
        <Text colors={colors}>{text}</Text>
      ))}
      <ContainerFrame>
        <PhoneFrame src={getRightFrame()} />
      </ContainerFrame>
      <ContainerScrollingSnap>
        <ContainerScrollElement numberOfElement={imagesPreview.length}>
          {imagesPreview.map((img) => (
            <ElementScrolling>
              <ImgScrolling src={img} />
            </ElementScrolling>
          ))}
        </ContainerScrollElement>
      </ContainerScrollingSnap>
    </ContainerWebsites>
  );
};
