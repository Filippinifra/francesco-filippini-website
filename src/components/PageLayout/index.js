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
        <Element name={aboutLabel}>
          <About />
        </Element>
        <Element name={workLabel}>
          <Work />
        </Element>
        <Element name={educationLabel}>
          <Education />
        </Element>
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
