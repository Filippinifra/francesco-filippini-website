import React, { useEffect, useMemo, useRef, useState } from 'react';

import Lottie from 'react-lottie';
import animationData from './rainbow-animation.json';

import {
  ContainerWebsites,
  Text,
  ContainerScrollingSnap,
  ElementScrolling,
  ContainerScrollElement,
  PhoneFrame,
  ContainerFrame,
  ImgScrolling,
} from './styled';

import blackFramePhone from 'img/phoneFrameBlack.png';
import whiteFramePhone from 'img/phoneFrameWhite.png';

import { imagesWebsitePreview } from 'text/textWebsites';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'components/Tooltip';
import { tooltipWebsiteRemoveAfterHover } from 'constants/animationSettings';

export const WebsitesSection = ({ lightIsOn, colors }) => {
  const { t } = useTranslation();

  const correctFrame = useMemo(() => (lightIsOn ? blackFramePhone : whiteFramePhone), [lightIsOn]);

  const buttonRef = useRef(null);
  const [isTooltipVisible, setTooltipVisible] = useState(true);

  const [tooltipPlacement, setTooltipPlacement] = useState('top');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const removeTooltip = () => {
    setTimeout(() => setTooltipVisible(false), tooltipWebsiteRemoveAfterHover);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef && buttonRef.current) {
        const top = buttonRef.current.getBoundingClientRect().top;
        if (top < 85 && tooltipPlacement === 'top') {
          setTooltipPlacement('bottom');
        }
        if (top >= 85 && tooltipPlacement === 'bottom') {
          setTooltipPlacement('top');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [buttonRef, tooltipPlacement]);

  return (
    <ContainerWebsites colors={colors}>
      <div style={{ margin: '0 auto 60px', maxWidth: 320 }}>
        <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
      </div>
      {t('textWebsites.texts', { returnObjects: true }).map((text, index) => (
        <Text colors={colors} key={`text-row-website-${index}`}>
          {text}
        </Text>
      ))}
      <Tooltip
        message={t('textWebsites.tootlipMessage')}
        placement={tooltipPlacement}
        isVisible={isTooltipVisible}
        targetRef={buttonRef}
        colors={colors}
      />
      <ContainerFrame>
        <PhoneFrame src={correctFrame} ref={buttonRef} alt="mobileFrame" />
      </ContainerFrame>
      <ContainerScrollingSnap>
        <ContainerScrollElement numberOfElement={imagesWebsitePreview.length} onMouseEnter={removeTooltip}>
          {imagesWebsitePreview.map((img, index) => (
            <ElementScrolling key={`image-preview-website-${index}`}>
              <ImgScrolling src={img} alt={`websitePreview${index}`} />
            </ElementScrolling>
          ))}
        </ContainerScrollElement>
      </ContainerScrollingSnap>
    </ContainerWebsites>
  );
};
