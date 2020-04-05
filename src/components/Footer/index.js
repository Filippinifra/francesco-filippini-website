import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import { footerLabel, contentModal } from "../../constants/commonsFooter";

import { ButtonModal, ContainerModal, TextRow } from "./styled";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalWithDelay = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, 300);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ButtonModal onClick={openModalWithDelay}>{footerLabel}</ButtonModal>
      <Drawer anchor={"bottom"} open={modalOpen} onClose={closeModal}>
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
