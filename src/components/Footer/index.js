import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import { footerLabel, contentModal } from "constants/commonsFooter";

import {
  delayModalFooterAppear,
  sideAppearModalFooter,
} from "constants/animationSettings";

import { ButtonModal, ContainerModal, TextRow, Link } from "./styled";

export const Footer = ({ colors }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { firstText, libraries, repoText, repoLink } = contentModal;

  const openModalWithDelay = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, delayModalFooterAppear);
  };

  return (
    <>
      <ButtonModal colors={colors} onClick={openModalWithDelay}>
        {footerLabel}
      </ButtonModal>
      <Drawer
        anchor={sideAppearModalFooter}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ContainerModal colors={colors}>
          <TextRow>{firstText}</TextRow>
          {libraries.map((row) => (
            <TextRow>
              <Link colors={colors} href={row[0].link} target="_blank">
                {row[0].label}
              </Link>
              {" - "}
              <Link colors={colors} href={row[1].link} target="_blank">
                {row[1].label}
              </Link>
            </TextRow>
          ))}
          <TextRow>
            <Link colors={colors} href={repoLink} target="_blank">
              {repoText}
            </Link>
          </TextRow>
        </ContainerModal>
      </Drawer>
    </>
  );
};
