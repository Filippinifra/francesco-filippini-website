import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import { ButtonModal, ContainerModal, TextRow, Link } from "./styled";

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
      <ButtonModal onClick={openModalWithDelay}>
        {"Created from scratch using React / Thanks"}
      </ButtonModal>
      <Drawer anchor={"bottom"} open={modalOpen} onClose={closeModal}>
        <ContainerModal>
          <div>
            <TextRow>
              Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
            </TextRow>
            <TextRow>
              <Link href="https://reactjs.org/" target="_blank">
                React
              </Link>
              {" - "}
              <Link href="https://material-ui.com/" target="_blank">
                Material UI
              </Link>
            </TextRow>
            <TextRow>
              <Link href="https://flaticon.com/" target="_blank">
                Flaticon
              </Link>
              {" - "}
              <Link href="https://styled-components.com/" target="_blank">
                Styled Components
              </Link>
            </TextRow>
            <TextRow>
              <Link
                href="https://github.com/Filippinifra/francesco-filippini-website"
                target="_blank"
              >
                Click for website repo
              </Link>
            </TextRow>
          </div>
        </ContainerModal>
      </Drawer>
    </>
  );
};

export default Footer;
