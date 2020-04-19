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

const Header = ({ handleNavClick, handleLightClick, lightIsOn, size }) => {
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
    <NavbarHeader>
      <ContainerNavbar>
        <GridContainer
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <GridItem item xs={6} sm={3}>
            <LeftGrid>
              <LogoImg src={FFLogo} />
              <LogoImg src={getLightImage()} onClick={handleLightClick} />
            </LeftGrid>
          </GridItem>
          <GridItem item xs={6} sm={9}>
            <RightGrid>
              {size.width > sizes.headerStep ? (
                <>
                  <NavButton onClick={() => handleClick(aboutLabel)}>
                    {aboutLabel}
                  </NavButton>
                  <NavButton onClick={() => handleClick(workLabel)}>
                    {workLabel}
                  </NavButton>
                  <NavButton onClick={() => handleClick(educationLabel)}>
                    {educationLabel}
                  </NavButton>
                  <NavButton onClick={() => handleClick(contactsLabel)}>
                    {contactsLabel}
                  </NavButton>
                </>
              ) : (
                <Hamburger
                  handleHamburgerClick={handleHamburgerClick}
                  active={hamburgerActive}
                />
              )}
            </RightGrid>
          </GridItem>
        </GridContainer>
      </ContainerNavbar>
      <ContainerMobileLink hamburgerActive={hamburgerActive}>
        <BorderContainer>
          <NavMobileButton onClick={() => handleClick(aboutLabel)}>
            {aboutLabel}
          </NavMobileButton>
          <NavMobileButton onClick={() => handleClick(workLabel)}>
            {workLabel}
          </NavMobileButton>
          <NavMobileButton onClick={() => handleClick(educationLabel)}>
            {educationLabel}
          </NavMobileButton>
          <NavMobileButton onClick={() => handleClick(contactsLabel)}>
            {contactsLabel}
          </NavMobileButton>
        </BorderContainer>
      </ContainerMobileLink>
    </NavbarHeader>
  );
};

export default withSize()(Header);
