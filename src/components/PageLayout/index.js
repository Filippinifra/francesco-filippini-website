import React from "react";

import Header from "../Header";
import { Element, scroller } from "react-scroll";

import Footer from "../Footer";

import { FooterContainer, HeaderContainer, ContentContainer } from "./styled";

import {
  aboutLabel,
  educationLabel,
  workLabel,
  contactsLabel,
} from "../../constants/labels";

import About from "../About";
import Work from "../Work";
import Education from "../Education";
import Contacts from "../Contacts";
import HeroSection from "../HeroSection";

import ParallaxElemenet from "../ParallaxElement";

import { ContainerDivider } from "../ContentDivider/styled";

import { scrollAnimation } from "../../constants/animationSettings";

import bigImgPolimi from "../../img/bigImgPolimi.png";
import bigImgSmb from "../../img/bigImgSmb.png";
import Websites from "../Websites";

const PageLayout = ({ lightIsOn, handleLightClick, colors }) => {
  const handleMenuClick = (idElement) => {
    scroller.scrollTo(idElement, scrollAnimation);
  };

  return (
    <>
      <HeaderContainer>
        <Header
          handleNavClick={handleMenuClick}
          handleLightClick={handleLightClick}
          lightIsOn={lightIsOn}
          colors={colors}
        />
      </HeaderContainer>
      <ContentContainer>
        <HeroSection colors={colors} />
        <Element name={aboutLabel}>
          <About colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgSmb} colors={colors} />
        <Element name={workLabel}>
          <Work colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgPolimi} colors={colors} />
        <Element name={educationLabel}>
          <Education colors={colors} />
        </Element>
        <ContainerDivider colors={colors} />
        <Websites lightIsOn={lightIsOn} colors={colors} />
        <ContainerDivider colors={colors} />
        <Element name={contactsLabel}>
          <Contacts colors={colors} />
        </Element>
      </ContentContainer>
      <FooterContainer colors={colors}>
        <Footer colors={colors} />
      </FooterContainer>
    </>
  );
};

export default PageLayout;
