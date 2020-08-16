import React, { useState } from "react";

import { withSize } from "react-sizeme";

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

import {
  aboutLabel,
  educationLabel,
  workLabel,
  contactsLabel,
} from "../../constants/labels";

import sizes from "../../constants/screenSizes";

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

  const handleClick = (name) => {
    if (hamburgerActive === true) setHamburgerActive(false);
    handleNavClick(name);
  };

  const handleHamburgerClick = () => {
    hamburgerActive === true
      ? setHamburgerActive(false)
      : setHamburgerActive(true);
  };

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
              {size.width > sizes.headerStep ? (
                <>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(aboutLabel)}
                  >
                    {aboutLabel}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(workLabel)}
                  >
                    {workLabel}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(educationLabel)}
                  >
                    {educationLabel}
                  </NavButton>
                  <NavButton
                    colors={colors}
                    onClick={() => handleClick(contactsLabel)}
                  >
                    {contactsLabel}
                  </NavButton>
                </>
              ) : (
                <Hamburger
                  handleHamburgerClick={handleHamburgerClick}
                  active={hamburgerActive}
                  colors={colors}
                />
              )}
            </RightGrid>
          </GridItem>
        </GridContainer>
      </ContainerNavbar>
      <ContainerMobileLink hamburgerActive={hamburgerActive}>
        <BorderContainer colors={colors}>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(aboutLabel)}
          >
            {aboutLabel}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(workLabel)}
          >
            {workLabel}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(educationLabel)}
          >
            {educationLabel}
          </NavMobileButton>
          <NavMobileButton
            colors={colors}
            onClick={() => handleClick(contactsLabel)}
          >
            {contactsLabel}
          </NavMobileButton>
        </BorderContainer>
      </ContainerMobileLink>
    </NavbarHeader>
  );
};

export default withSize()(Header);
