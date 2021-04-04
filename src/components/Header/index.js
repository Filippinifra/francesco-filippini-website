import React, { useState, useEffect, useRef, useMemo } from 'react';

import { withSize } from 'react-sizeme';

import { ChangeLangDropDown } from 'components/ChangeLangDropDown';

import {
  WrapperNavbar,
  NavbarHeader,
  GridWrapper,
  LogoImg,
  NavButton,
  RightGrid,
  LeftGrid,
  GridItem,
  NavMobileButton,
  WrapperMobileLink,
  BorderWrapper,
} from './styled';

import FFLogo from 'img/myLogo.png';
import lightOn from 'img/lightOn.svg';
import lightOff from 'img/lightOff.svg';

import sizes from 'constants/screenSizes';

import { useTranslation } from 'react-i18next';

import Hamburger from './Hamburger';
import { Tooltip } from 'components/Tooltip';
import { tooltipHeaderAppearAfterLoading, tooltipHeaderRemoveAfterLoading } from 'constants/animationSettings';
import { useTheme } from 'hook/useTheme';

const Header = ({ handleNavClick, scrollToTop, size }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const { lightIsOn, onLightClick, colors } = useTheme();

  const getLightImage = () => (lightIsOn ? lightOn : lightOff);

  const { t } = useTranslation();

  const handleClick = (name) => {
    if (hamburgerActive) setHamburgerActive(false);
    handleNavClick(name);
  };

  const handleHamburgerClick = () => setHamburgerActive(!hamburgerActive);

  const isDesktopView = size.width > sizes.headerStep;

  const lightButtonRef = useRef(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTooltipVisible(true);
    }, tooltipHeaderAppearAfterLoading);
    setTimeout(() => {
      setTooltipVisible(false);
    }, tooltipHeaderRemoveAfterLoading);
  }, []);

  const DropdownLangs = useMemo(
    () => (
      <ChangeLangDropDown
        widthElement={60}
        heightElement={50}
        color={colors.headerColor}
        bgColor={colors.headerBgColor}
        shadeColor={colors.headerShade}
        style={{
          marginLeft: isDesktopView ? 15 : 0,
          marginRight: isDesktopView ? 0 : 15,
        }}
        onClick={(e) => e.preventDefault()}
      />
    ),
    [isDesktopView, colors]
  );

  return (
    <NavbarHeader colors={colors}>
      <WrapperNavbar colors={colors}>
        <GridWrapper container direction="row" justify="center" alignItems="center">
          <GridItem item xs={6} sm={3}>
            <LeftGrid>
              <LogoImg src={FFLogo} onClick={scrollToTop} alt="headerPersonalLogo" />
              <LogoImg
                src={getLightImage()}
                onClick={() => {
                  onLightClick();
                  setTooltipVisible(false);
                }}
                ref={lightButtonRef}
                alt="lightIcon"
              />
              <Tooltip
                message={t('textHeader.tootlipMessage')}
                placement="bottom"
                isVisible={isTooltipVisible}
                targetRef={lightButtonRef}
              />
            </LeftGrid>
          </GridItem>
          <GridItem item xs={6} sm={9}>
            <RightGrid>
              {isDesktopView ? (
                <>
                  <NavButton colors={colors} onClick={() => handleClick(t('textHeader.about'))}>
                    {t('textHeader.about')}
                  </NavButton>
                  <NavButton colors={colors} onClick={() => handleClick(t('textHeader.work'))}>
                    {t('textHeader.work')}
                  </NavButton>
                  <NavButton colors={colors} onClick={() => handleClick(t('textHeader.education'))}>
                    {t('textHeader.education')}
                  </NavButton>
                  <NavButton colors={colors} onClick={() => handleClick(t('textHeader.contacts'))}>
                    {t('textHeader.contacts')}
                  </NavButton>
                  {DropdownLangs}
                </>
              ) : (
                <>
                  {DropdownLangs}
                  <Hamburger handleHamburgerClick={handleHamburgerClick} active={hamburgerActive} />
                </>
              )}
            </RightGrid>
          </GridItem>
        </GridWrapper>
      </WrapperNavbar>
      <WrapperMobileLink hamburgerActive={hamburgerActive}>
        <BorderWrapper colors={colors}>
          <NavMobileButton colors={colors} onClick={() => handleClick(t('textHeader.about'))}>
            {t('textHeader.about')}
          </NavMobileButton>
          <NavMobileButton colors={colors} onClick={() => handleClick(t('textHeader.work'))}>
            {t('textHeader.work')}
          </NavMobileButton>
          <NavMobileButton colors={colors} onClick={() => handleClick(t('textHeader.education'))}>
            {t('textHeader.education')}
          </NavMobileButton>
          <NavMobileButton colors={colors} onClick={() => handleClick(t('textHeader.contacts'))}>
            {t('textHeader.contacts')}
          </NavMobileButton>
        </BorderWrapper>
      </WrapperMobileLink>
    </NavbarHeader>
  );
};

export default withSize()(Header);
