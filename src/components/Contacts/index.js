import React from "react";

import {
  RowContact,
  ContainerContacts,
  GridRow,
  Icon,
  TextInformation,
  Link,
  GridItem,
  ContainerImgAndText,
  WrapperImg,
  TextContainer
} from "./styled";

import phoneIcon from "../../img/phonebook.svg";
import mailIcon from "../../img/email.svg";
import addressIcon from "../../img/placeholder.svg";
import linkedinIcon from "../../img/linkedin.svg";

import { commonsContacts } from "../../constants/commonsContacts";

const Contacts = () => (
  <ContainerContacts>
    <RowContact>
      <GridRow
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <GridItem item xs={12} sm={6}>
          <Link href={`tel:${commonsContacts.phoneNumber}`}>
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
        <GridItem item xs={12} sm={6}>
          <Link
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
      </GridRow>
    </RowContact>
    <RowContact>
      <GridRow
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <GridItem item xs={12} sm={6}>
          <Link href={commonsContacts.mapsLinkToAddress} target="_blank">
            <ContainerImgAndText>
              <WrapperImg>
                <Icon src={addressIcon} />
              </WrapperImg>
              <TextInformation>{commonsContacts.address}</TextInformation>
            </ContainerImgAndText>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <Link href={commonsContacts.linkedinLink} target="_blank">
            <ContainerImgAndText>
              <WrapperImg>
                <Icon src={linkedinIcon} />
              </WrapperImg>
              <TextInformation>{commonsContacts.linkedinId}</TextInformation>
            </ContainerImgAndText>
          </Link>
        </GridItem>
      </GridRow>
    </RowContact>
  </ContainerContacts>
);

export default Contacts;
