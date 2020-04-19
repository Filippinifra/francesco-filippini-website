import React from "react";

import About from "../components/About";
import Contacts from "../components/Contacts";
import Work from "../components/Work";
import Education from "../components/Education";

export const aboutLabel = "about";
export const educationLabel = "education";
export const workLabel = "work";
export const contactsLabel = "contacts";

export const mapNameComponent = {
  aboutLabel: <About />,
  educationLabel: <Education />,
  workLabel: <Work />,
  contactsLabel: <Contacts />,
  none: <div style={{ height: "100%", width: "100%" }} />,
};
