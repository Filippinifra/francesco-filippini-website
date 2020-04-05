import React from "react";

import { NavigationBar, NavigationItem } from "./styled";

import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import ContactsIcon from "@material-ui/icons/Contacts";
import WorkIcon from "@material-ui/icons/Work";

const Header = ({ handleChange, currentSection }) => (
  <NavigationBar
    value={currentSection}
    onChange={(e, value) => handleChange(value)}
  >
    <NavigationItem label="Home" value="home" icon={<HomeIcon />} />
    <NavigationItem label="Career" value="work" icon={<WorkIcon />} />
    <NavigationItem label="Education" value="education" icon={<SchoolIcon />} />
    <NavigationItem label="Contacts" value="contacts" icon={<ContactsIcon />} />
  </NavigationBar>
);

export default Header;
