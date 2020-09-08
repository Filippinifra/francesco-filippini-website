import React, { useCallback } from "react";

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

import blackFramePhone from "img/phoneFrameBlack.png";
import whiteFramePhone from "img/phoneFrameWhite.png";

import { imagesWebsitePreview } from "text/textWebsites";
import { useTranslation } from "react-i18next";

export const WebsitesSection = ({ lightIsOn, colors }) => {
  const { t } = useTranslation();

  const getRightFrame = useCallback(
    () => (lightIsOn ? blackFramePhone : whiteFramePhone),
    [lightIsOn]
  );

  return (
    <ContainerWebsites colors={colors}>
      {t("textWebsites.texts", { returnObjects: true }).map((text) => (
        <Text colors={colors}>{text}</Text>
      ))}
      <ContainerFrame>
        <PhoneFrame src={getRightFrame()} />
      </ContainerFrame>
      <ContainerScrollingSnap>
        <ContainerScrollElement numberOfElement={imagesWebsitePreview.length}>
          {imagesWebsitePreview.map((img) => (
            <ElementScrolling>
              <ImgScrolling src={img} />
            </ElementScrolling>
          ))}
        </ContainerScrollElement>
      </ContainerScrollingSnap>
    </ContainerWebsites>
  );
};
