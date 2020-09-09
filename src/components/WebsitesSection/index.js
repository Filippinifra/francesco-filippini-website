import React, { useCallback } from "react";

import Lottie from "react-lottie";
import animationData from "./rainbow-animation.json";

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContainerWebsites colors={colors}>
      <div style={{ marginBottom: 60 }}>
        <Lottie
          options={defaultOptions}
          height={160}
          width={320}
          isStopped={false}
          isPaused={false}
        />
      </div>
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
