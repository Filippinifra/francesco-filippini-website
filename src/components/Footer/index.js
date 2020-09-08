import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";

import {
  delayModalFooterAppear,
  sideAppearModalFooter,
} from "constants/animationSettings";

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
        {t("contentFooter.footerLabel")}
      </ButtonModal>
      <Drawer
        anchor={sideAppearModalFooter}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ContainerModal colors={colors}>
          <TextRow>{t("contentFooter.firstText")}</TextRow>
          {t("contentFooter.libraries", { returnObjects: true }).map((row) => (
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
            <Link
              colors={colors}
              href={t("contentFooter.repoLink")}
              target="_blank"
            >
              {t("contentFooter.repoText")}
            </Link>
          </TextRow>
        </ContainerModal>
      </Drawer>
    </>
  );
};
