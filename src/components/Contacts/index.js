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
          <Link href="tel:+393466876007">
            <ContentCentered>
              <Icon src={phoneIcon} />
            </ContentCentered>
            <TextInformation>+39_346_6876007</TextInformation>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <Link
            href="mailto:filippinifra123@gmail.com?subject=Richiesta"
            target="_blank"
          >
            <ContentCentered>
              <Icon src={mailIcon} />
            </ContentCentered>
            <TextInformation>filippinifra123@gmail.com</TextInformation>
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
          <Link href="https://goo.gl/maps/AcDb9StsUgyt7n2b9" target="_blank">
            <ContentCentered>
              <Icon src={addressIcon} />
            </ContentCentered>
            <TextInformation>Via Riccardo Pitteri 91, Milano</TextInformation>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <Link
            href="https://www.linkedin.com/in/francescofilippini96/"
            target="_blank"
          >
            <ContentCentered>
              <Icon src={linkedinIcon} />
            </ContentCentered>
            <TextInformation>/francescofilippini96</TextInformation>
          </Link>
        </GridItem>
      </GridRow>
    </RowContact>
  </ContainerContacts>
);

export default Contacts;
