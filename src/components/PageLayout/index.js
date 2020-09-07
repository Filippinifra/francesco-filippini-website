import React from "react";

import Header from "components/Header";
import { Element, scroller, animateScroll as scroll } from "react-scroll";

import { Footer } from "components/Footer";

import { FooterContainer, HeaderContainer, ContentContainer } from "./styled";

import { useTranslation } from "react-i18next";

import AboutSection from "components/AboutSection";
import { WorkSection } from "components/WorkSection";
import { EducationSection } from "components/EducationSection";
import { ContactsSection } from "components/ContactsSection";
import { HeroSection } from "components/HeroSection";
import { WebsitesSection } from "components/WebsitesSection";

import { ParallaxElemenet } from "components/ParallaxElement";

import { ContainerDivider } from "components/ContentDivider/styled";

import { scrollAnimation } from "constants/animationSettings";

import bigImgPolimi from "img/bigImgPolimi.png";
import bigImgSmb from "img/bigImgSmb.png";

const PageLayout = ({ lightIsOn, handleLightClick, colors }) => {
  const handleMenuClick = (idElement) =>
    scroller.scrollTo(idElement, scrollAnimation);

  const scrollToTop = () => scroll.scrollToTop();

  const { t } = useTranslation();

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
        <Element name={t("labels.about")}>
          <AboutSection colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgSmb} colors={colors} />
        <Element name={t("labels.work")}>
          <WorkSection colors={colors} />
        </Element>
        <ParallaxElemenet imgSrc={bigImgPolimi} colors={colors} />
        <Element name={t("labels.education")}>
          <EducationSection colors={colors} />
        </Element>
        <ContainerDivider colors={colors} />
        <WebsitesSection lightIsOn={lightIsOn} colors={colors} />
        <ContainerDivider colors={colors} />
        <Element name={t("labels.contacts")}>
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
