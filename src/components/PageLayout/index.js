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

const PageLayout = () => {
  const handleMenuClick = (idElement) => {
    scroller.scrollTo(idElement, scrollAnimation);
  };

  return (
    <>
      <HeaderContainer>
        <Header
          handleNavClick={handleMenuClick}
          handleLightClick={() => {}}
          lightIsOn={true}
        />
      </HeaderContainer>
      <ContentContainer>
        <HeroSection />
        <Element name={aboutLabel}>
          <About />
        </Element>
        <ParallaxElemenet imgSrc={bigImgSmb} />
        <Element name={workLabel}>
          <Work />
        </Element>
        <ParallaxElemenet imgSrc={bigImgPolimi} />
        <Element name={educationLabel}>
          <Education />
        </Element>
        <ContainerDivider />
        <Websites lightIsOn={true} />
        <ContainerDivider />
        <Element name={contactsLabel}>
          <Contacts />
        </Element>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default PageLayout;
