import React from "react";

import {
  ContainerContacts,
  GridRow,
  Icon,
  TextInformation,
  Link,
  GridItem,
  ContainerImgAndText,
  WrapperImg,
  TextContainer,
} from "./styled";

import phoneIcon from "../../img/contactLogos/phonebookLogo.svg";
import mailIcon from "../../img/contactLogos/emailLogo.svg";
import addressIcon from "../../img/contactLogos/locationLogo.svg";
import linkedinIcon from "../../img/contactLogos/linkedinLogo.svg";

import { commonsContacts } from "../../constants/commonsContacts";

export const ContactsSection = ({ colors }) => (
  <ContainerContacts colors={colors}>
    <GridRow container direction="row" justify="center" alignItems="flex-start">
      <GridItem item xs={12} sm={6} md={3}>
        <Link colors={colors} href={`tel:${commonsContacts.phoneNumber}`}>
          <ContainerImgAndText>
            <WrapperImg>
              <Icon src={phoneIcon} />
            </WrapperImg>
            <TextContainer>
              <TextInformation>{commonsContacts.phoneNumber}</TextInformation>
            </TextContainer>
          </ContainerImgAndText>
        </Link>
      </GridItem>
      <GridItem item xs={12} sm={6} md={3}>
        <Link
          colors={colors}
          href={`mailto:${commonsContacts.email}?subject=Richiesta`}
          target="_blank"
        >
          <ContainerImgAndText>
            <WrapperImg>
              <Icon src={mailIcon} />
            </WrapperImg>
            <TextContainer>
              <TextInformation>{commonsContacts.email}</TextInformation>
            </TextContainer>
          </ContainerImgAndText>
        </Link>
      </GridItem>
      <GridItem item xs={12} sm={6} md={3}>
        <Link
          colors={colors}
          href={commonsContacts.mapsLinkToAddress}
          target="_blank"
        >
          <ContainerImgAndText>
            <WrapperImg>
              <Icon src={addressIcon} />
            </WrapperImg>
            <TextInformation>{commonsContacts.address}</TextInformation>
          </ContainerImgAndText>
        </Link>
      </GridItem>
      <GridItem item xs={12} sm={6} md={3}>
        <Link
          colors={colors}
          href={commonsContacts.linkedinLink}
          target="_blank"
        >
          <ContainerImgAndText>
            <WrapperImg>
              <Icon src={linkedinIcon} />
            </WrapperImg>
            <TextInformation>{commonsContacts.linkedinId}</TextInformation>
          </ContainerImgAndText>
        </Link>
      </GridItem>
    </GridRow>
  </ContainerContacts>
);
