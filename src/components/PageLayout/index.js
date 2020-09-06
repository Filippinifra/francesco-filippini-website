import React from "react";

import Header from "../Header";
import { Element, scroller, animateScroll as scroll } from "react-scroll";

import { Footer } from "../Footer";

import { FooterContainer, HeaderContainer, ContentContainer } from "./styled";

import {
  aboutLabel,
  educationLabel,
  workLabel,
  contactsLabel,
} from "../../constants/labels";

import AboutSection from "../AboutSection";
import { WorkSection } from "../WorkSection";
import { EducationSection } from "../EducationSection";
import { ContactsSection } from "../ContactsSection";
import { HeroSection } from "../HeroSection";
import { WebsitesSection } from "../WebsitesSection";

import { ParallaxElemenet } from "../ParallaxElement";

import { ContainerDivider } from "../ContentDivider/styled";

import { scrollAnimation } from "../../constants/animationSettings";

import bigImgPolimi from "../../img/bigImgPolimi.png";
import bigImgSmb from "../../img/bigImgSmb.png";

const PageLayout = ({ lightIsOn, handleLightClick, colors }) => {
  const handleMenuClick = (idElement) =>
    scroller.scrollTo(idElement, scrollAnimation);

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <>
      <HeaderContainer>
        <Header
          handleNavClick={handleMenuClick}
          handleLightClick={handleLightClick}
          scrollToTop={scrollToTop}
          lightIsOn={lightIsOn}
          colors={colors}
        />
      </HeaderContainer>
      <ContentContainer>
        <HeroSection colors={colors} />
        <Element name={aboutLabel}>
          <AboutSection colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgSmb} colors={colors} />
        <Element name={workLabel}>
          <WorkSection colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgPolimi} colors={colors} />
        <Element name={educationLabel}>
          <EducationSection colors={colors} />
        </Element>
        <ContainerDivider colors={colors} />
        <WebsitesSection lightIsOn={lightIsOn} colors={colors} />
        <ContainerDivider colors={colors} />
        <Element name={contactsLabel}>
          <ContactsSection colors={colors} />
        </Element>
      </ContentContainer>
      <FooterContainer colors={colors}>
        <Footer colors={colors} />
      </FooterContainer>
    </>
  );
};

export default PageLayout;
