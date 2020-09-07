import React, { useState, useCallback } from "react";

import { withSize } from "react-sizeme";

import { ChangeLangDropDown } from "../ChangeLangDropDown";

import {
  ContainerNavbar,
  NavbarHeader,
  GridContainer,
  LogoImg,
  NavButton,
  RightGrid,
  LeftGrid,
  GridItem,
  NavMobileButton,
  ContainerMobileLink,
  BorderContainer,
} from "./styled";

import FFLogo from "../../img/myLogo.png";
import lightOn from "../../img/lightOn.svg";
import lightOff from "../../img/lightOff.svg";

import sizes from "../../constants/screenSizes";

import { useTranslation } from "react-i18next";

import Hamburger from "./Hamburger";

const Header = ({
  handleNavClick,
  handleLightClick,
  scrollToTop,
  lightIsOn,
  size,
  colors,
}) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const getLightImage = () => (lightIsOn ? lightOn : lightOff);

  const { t } = useTranslation();

  const handleClick = (name) => {
    if (hamburgerActive) setHamburgerActive(false);
    handleNavClick(name);
  };

  const handleHamburgerClick = () => setHamburgerActive(!hamburgerActive);

  const isDesktopView = size.width > sizes.headerStep;

  const DropdownLangs = useCallback(
    () => (
      <ChangeLangDropDown
        widthElement={50}
        heightElement={50}
        color={colors.headerColor}
        bgColor={colors.headerBgColor}
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
      <ContainerNavbar colors={colors}>
        <GridContainer
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <GridItem item xs={6} sm={3}>
            <LeftGrid>
              <LogoImg src={FFLogo} onClick={scrollToTop} />
              <LogoImg src={getLightImage()} onClick={handleLightClick} />
            </LeftGrid>
          </GridItem>
          <GridItem item xs={6} sm={9}>
            <RightGrid>
              {isDesktopView ? (
                <>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(t("labels.about"))}
                  >
                    {t("labels.about")}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(t("labels.work"))}
                  >
                    {t("labels.work")}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(t("labels.education"))}
                  >
                    {t("labels.education")}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(t("labels.contacts"))}
                  >
                    {t("labels.contacts")}
                  </NavButton>
                  <DropdownLangs />
                </>
              ) : (
                <>
                  <DropdownLangs />
                  <Hamburger
                    handleHamburgerClick={handleHamburgerClick}
                    active={hamburgerActive}
                    colors={colors}
                  />
                </>
              )}
            </RightGrid>
          </GridItem>
        </GridContainer>
      </ContainerNavbar>
      <ContainerMobileLink hamburgerActive={hamburgerActive}>
        <BorderContainer colors={colors}>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(t("labels.about"))}
          >
            {t("labels.about")}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(t("labels.work"))}
          >
            {t("labels.work")}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(t("labels.education"))}
          >
            {t("labels.education")}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(t("labels.contacts"))}
          >
            {t("labels.contacts")}
          </NavMobileButton>
        </BorderContainer>
      </ContainerMobileLink>
    </NavbarHeader>
  );
};

export default withSize()(Header);
