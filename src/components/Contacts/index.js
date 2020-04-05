import React from "react";

import {
  RowContact,
  ContainerContacts,
  GridRow,
  Icon,
  TextInformation,
  Link,
  ContentCentered,
  GridItem
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
            <ContentCentered>
              <Icon src={phoneIcon} />
            </ContentCentered>
            <TextInformation>{commonsContacts.phoneNumber}</TextInformation>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <Link
            href={`mailto:${commonsContacts.email}?subject=Richiesta`}
            target="_blank"
          >
            <ContentCentered>
              <Icon src={mailIcon} />
            </ContentCentered>
            <TextInformation>{commonsContacts.email}</TextInformation>
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
            <ContentCentered>
              <Icon src={addressIcon} />
            </ContentCentered>
            <TextInformation>{commonsContacts.address}</TextInformation>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <Link href={commonsContacts.linkedinLink} target="_blank">
            <ContentCentered>
              <Icon src={linkedinIcon} />
            </ContentCentered>
            <TextInformation>{commonsContacts.linkedinId}</TextInformation>
          </Link>
        </GridItem>
      </GridRow>
    </RowContact>
  </ContainerContacts>
);

export default Contacts;
