import React from "react";

import Header from "../Header";
import CentralPageElement from "../CentralPageElement";

import Footer from "../Footer";

import { CentralContainer, FooterContainer } from "./styled";

const PageLayout = ({
  handleChange,
  currentElement,
  currentSection,
  nextElement,
  animationIsActive,
  rotationString
}) => {
  return (
    <>
      <Header handleChange={handleChange} currentSection={currentSection} />
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <CentralContainer>
        <CentralPageElement
          currentElement={currentElement}
          nextElement={nextElement}
          animationIsActive={animationIsActive}
          rotationString={rotationString}
        />
      </CentralContainer>
    </>
  );
};

export default PageLayout;
