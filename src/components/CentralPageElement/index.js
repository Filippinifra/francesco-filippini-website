import React from "react";

import Swapper from "../Swapper";

import { ContainerSwapper } from "./styled";

const CentralPageElement = props => (
  <ContainerSwapper>
    <Swapper {...props} />
  </ContainerSwapper>
);

export default CentralPageElement;
