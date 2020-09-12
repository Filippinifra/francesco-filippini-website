import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import {
  delayModalFooterAppear,
  sideAppearModalFooter,
} from "constants/animationSettings";

import { librariesUsed } from "text/textFooter";

import { ButtonModal, ContainerModal, TextRow, Link } from "./styled";
import { useTranslation } from "react-i18next";

export const Footer = ({ colors }) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const openModalWithDelay = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, delayModalFooterAppear);
  };

  return (
    <>
      <ButtonModal colors={colors} onClick={openModalWithDelay}>
        {t("textFooter.footerLabel")}
      </ButtonModal>
      <Drawer
        anchor={sideAppearModalFooter}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ContainerModal colors={colors}>
          <TextRow>{t("textFooter.firstText")}</TextRow>
          {librariesUsed.map((row, index) => (
            <TextRow key={`text-library-used-footer-${index}`}>
              <Link colors={colors} href={row[0].link} target="_blank">
                {row[0].label}
              </Link>
              {" - "}
              <Link colors={colors} href={row[1].link} target="_blank">
                {row[1].label}
              </Link>
            </TextRow>
          ))}
          <TextRow style={{ marginTop: 30, fontWeight: 800 }}>
            <Link
              colors={colors}
              href={t("textFooter.repoLink")}
              target="_blank"
            >
              {t("textFooter.repoText")}
            </Link>
          </TextRow>
        </ContainerModal>
      </Drawer>
    </>
  );
};
