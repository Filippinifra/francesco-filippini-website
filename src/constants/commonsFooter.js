import React from "react";
import Styled from "styled-components";

const Link = Styled.a`
    text-decoration: underline;
    color: blue;
`;

export const footerLabel = "Created from scratch using React";

export const contentModal = [
  {
    content: (
      <div>
        Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
      </div>
    ),
  },
  {
    content: (
      <>
        <Link href="https://reactjs.org/" target="_blank">
          React
        </Link>
        {" - "}
        <Link href="https://material-ui.com/" target="_blank">
          Material UI
        </Link>
      </>
    ),
  },
  {
    content: (
      <>
        <Link href="https://flaticon.com/" target="_blank">
          Flaticon
        </Link>
        {" - "}
        <Link href="https://styled-components.com/" target="_blank">
          Styled Components
        </Link>
      </>
    ),
  },
  {
    content: (
      <Link
        href="https://github.com/Filippinifra/francesco-filippini-website"
        target="_blank"
      >
        Click for website repo
      </Link>
    ),
  },
];
