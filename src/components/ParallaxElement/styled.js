import styled from 'styled-components';

export const Parallax = styled.div`
  position: unset !important;

  display: block;
  background-image: url(${({ imgSrc }) => imgSrc});

  min-height: 400px;
  height: 100%;

  background-attachment: none;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
