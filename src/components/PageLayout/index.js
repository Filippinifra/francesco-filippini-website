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
import { ContainerDivider } from "../ContentDivider/styled";

const PageLayout = () => {
  const handleMenuClick = (idElement) => {
    scroller.scrollTo(idElement, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
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
        <ContainerDivider />
        <Element name={workLabel}>
          <Work />
        </Element>
        <ContainerDivider />
        <Element name={educationLabel}>
          <Education />
        </Element>
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
