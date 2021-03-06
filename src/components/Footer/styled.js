import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const ButtonModal = styled(Button)`
  text-transform: none !important;
  color: ${({ colors }) => colors.footerColor} !important;
  width: 100%;
  font-size: 12px !important;
`;

export const WrapperModal = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors.modalBgColor};
  color: ${({ colors }) => colors.modalColor};
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  padding-top: 40px;
  padding-bottom: 50px;
`;

export const TextRow = styled.div`
  text-align: center;
  line-height: 30px;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${({ colors }) => colors.modalLinkColor};
`;
