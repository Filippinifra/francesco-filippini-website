import React from "react";

import Home from "../components/Home";
import Contacts from "../components/Contacts";
import Work from "../components/Work";
import Education from "../components/Education";

const mapNameComponent = {
  home: <Home />,
  education: <Education />,
  work: <Work />,
  contacts: <Contacts />,
  none: <div style={{ height: "100%", width: "100%" }} />
};

export default mapNameComponent;
