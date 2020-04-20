import Styled from "styled-components";

export const Parallax = Styled.div`
    position: unset !important;

    display: block;
    background-image: url(${(props) => props.imgSrc});

    min-height: 400px;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
