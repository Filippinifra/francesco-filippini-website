import React from 'react';
import { WrapperContacts, GridRow, Icon, TextInformation, Link, GridItem, WrapperImgAndText, WrapperImg, TextWrapper } from './styled';
import phoneIcon from 'img/contactLogos/phonebookLogo.svg';
import mailIcon from 'img/contactLogos/emailLogo.svg';
import addressIcon from 'img/contactLogos/locationLogo.svg';
import linkedinIcon from 'img/contactLogos/linkedinLogo.svg';
import { textContacts } from 'text/textContacts';
import { useTheme } from 'hook/useTheme';
import { FadeAnimation } from 'components/FadeAnimation';
import { ButtonAnimation } from 'components/ButtonAnimation';

export const ContactsSection = () => {
  const { colors } = useTheme();
  const { phoneNumber, email, mapsLinkToAddress, linkedinId, address, linkedinLink } = textContacts;

  const contactList = [
    { href: `tel:${phoneNumber}`, srcImage: phoneIcon, alt: 'phoneIcon', textInfo: phoneNumber, openNewWindow: false },
    { href: `mailto:${email}?subject=Richiesta`, srcImage: mailIcon, alt: 'mailIcon', textInfo: email, openNewWindow: false },
    { href: mapsLinkToAddress, srcImage: addressIcon, alt: 'addressIcon', textInfo: address, openNewWindow: true },
    { href: linkedinLink, srcImage: linkedinIcon, alt: 'linkedinIcon', textInfo: linkedinId, openNewWindow: true },
  ];

  return (
    <WrapperContacts colors={colors}>
      <GridRow container direction="row" justify="center" alignItems="flex-start">
        {contactList.map(({ href, srcImage, alt, textInfo, openNewWindow }) => (
          <GridItem item xs={12} sm={6} md={3}>
            <FadeAnimation>
              <ButtonAnimation canTap>
                <Link colors={colors} href={href} target={openNewWindow && '_blank'} rel={openNewWindow && 'noreferrer'}>
                  <WrapperImgAndText>
                    <WrapperImg>
                      <Icon src={srcImage} alt={alt} />
                    </WrapperImg>
                    <TextWrapper>
                      <TextInformation>{textInfo}</TextInformation>
                    </TextWrapper>
                  </WrapperImgAndText>
                </Link>
              </ButtonAnimation>
            </FadeAnimation>
          </GridItem>
        ))}
      </GridRow>
    </WrapperContacts>
  );
};
