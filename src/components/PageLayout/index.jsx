import React from 'react';
import { Header } from 'components/Header';
import { Element, scroller, animateScroll as scroll } from 'react-scroll';
import { Footer } from 'components/Footer';
import { FooterWrapper, HeaderWrapper, ContentWrapper } from './styled';
import { useTranslation } from 'react-i18next';
import { AboutSection } from 'components/AboutSection';
import { WorkSection } from 'components/WorkSection';
import { EducationSection } from 'components/EducationSection';
import { ContactsSection } from 'components/ContactsSection';
import { HeroSection } from 'components/HeroSection';
import { WebsitesSection } from 'components/WebsitesSection';
import { ParallaxElemenet } from 'components/ParallaxElement';
import { ContentDivider } from 'components/ContentDivider';
import { scrollAnimation } from 'constants/animationSettings';
import bigImgPolimi from 'img/bigImgPolimi.png';
import bigImgSmb from 'img/bigImgSmb.png';
import { useTheme } from 'hook/useTheme';

export const PageLayout = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const handleMenuClick = (idElement) => scroller.scrollTo(idElement, scrollAnimation);

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <>
      <HeaderWrapper>
        <Header handleNavClick={handleMenuClick} scrollToTop={scrollToTop} />
      </HeaderWrapper>
      <ContentWrapper>
        <HeroSection />
        <Element name={t('textHeader.about')}>
          <AboutSection />
        </Element>
        <ParallaxElemenet imgSrc={bigImgSmb} />
        <Element name={t('textHeader.work')}>
          <WorkSection />
        </Element>
        <ParallaxElemenet imgSrc={bigImgPolimi} />
        <Element name={t('textHeader.education')}>
          <EducationSection />
        </Element>
        <ContentDivider />
        <WebsitesSection />
        <ContentDivider />
        <Element name={t('textHeader.contacts')}>
          <ContactsSection />
        </Element>
      </ContentWrapper>
      <FooterWrapper colors={colors}>
        <Footer />
      </FooterWrapper>
    </>
  );
};
