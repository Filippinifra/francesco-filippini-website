import React from 'react';
import { WrapperContacts, GridRow, Icon, TextInformation, Link, GridItem, WrapperImgAndText, WrapperImg, TextWrapper } from './styled';
import phoneIcon from 'img/contactLogos/phonebookLogo.svg';
import mailIcon from 'img/contactLogos/emailLogo.svg';
import addressIcon from 'img/contactLogos/locationLogo.svg';
import linkedinIcon from 'img/contactLogos/linkedinLogo.svg';
import { textContacts } from 'text/textContacts';
import { useTheme } from 'hook/useTheme';

export const ContactsSection = () => {
  const { colors } = useTheme();
  const { phoneNumber, email, mapsLinkToAddress, linkedinId, address, linkedinLink } = textContacts;

  return (
    <WrapperContacts colors={colors}>
      <GridRow container direction="row" justify="center" alignItems="flex-start">
        <GridItem item xs={12} sm={6} md={3}>
          <Link colors={colors} href={`tel:${phoneNumber}`}>
            <WrapperImgAndText>
              <WrapperImg>
                <Icon src={phoneIcon} alt="phoneIcon" />
              </WrapperImg>
              <TextWrapper>
                <TextInformation>{phoneNumber}</TextInformation>
              </TextWrapper>
            </WrapperImgAndText>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Link colors={colors} href={`mailto:${email}?subject=Richiesta`} target="_blank">
            <WrapperImgAndText>
              <WrapperImg>
                <Icon src={mailIcon} alt="mailIcon" />
              </WrapperImg>
              <TextWrapper>
                <TextInformation>{email}</TextInformation>
              </TextWrapper>
            </WrapperImgAndText>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Link colors={colors} href={mapsLinkToAddress} target="_blank" rel="noreferrer">
            <WrapperImgAndText>
              <WrapperImg>
                <Icon src={addressIcon} alt="addressIcon" />
              </WrapperImg>
              <TextInformation>{address}</TextInformation>
            </WrapperImgAndText>
          </Link>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Link colors={colors} href={linkedinLink} target="_blank" rel="noreferrer">
            <WrapperImgAndText>
              <WrapperImg>
                <Icon src={linkedinIcon} alt="linkedinIcon" />
              </WrapperImg>
              <TextInformation>{linkedinId}</TextInformation>
            </WrapperImgAndText>
          </Link>
        </GridItem>
      </GridRow>
    </WrapperContacts>
  );
};
