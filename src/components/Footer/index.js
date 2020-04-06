import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import { footerLabel, contentModal } from "../../constants/commonsFooter";

import {
  delayModalFooterAppear,
  sideAppearModalFooter
} from "../../constants/animationSettings";

import { ButtonModal, ContainerModal, TextRow } from "./styled";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalWithDelay = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, delayModalFooterAppear);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ButtonModal onClick={openModalWithDelay}>{footerLabel}</ButtonModal>
      <Drawer
        anchor={sideAppearModalFooter}
        open={modalOpen}
        onClose={closeModal}
      >
        <ContainerModal>
          <div>
            {contentModal.map(element => (
              <TextRow>{element.content}</TextRow>
            ))}
          </div>
        </ContainerModal>
      </Drawer>
    </>
  );
};

export default Footer;
