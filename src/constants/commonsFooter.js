import React from "react";
import Styled from "styled-components";

const Link = Styled.a`
    text-decoration: underline;
    color: blue;
`;

export const footerLabel = "Created from scratch using React";

export const contentModal = {
  firstText: "Made with ❤️ using",
  libraries: [
    [
      { label: "React", link: "https://reactjs.org/" },
      { label: "Material UI", link: "https://material-ui.com/" },
    ],
    [
      { label: "Flaticon", link: "https://flaticon.com/" },
      { label: "Styled Components", link: "https://styled-components.com/" },
    ],
  ],
  repoText: "Click for website repo",
  repoLink: "https://github.com/Filippinifra/francesco-filippini-website",
};
