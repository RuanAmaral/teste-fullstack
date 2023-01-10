import React from "react";

import {  ButtonComponentStyle } from "./Style";

const Buttons = (props) => {
  return (
      <ButtonComponentStyle onClick={props.function}>{props.name}</ButtonComponentStyle>
  );
};

export default Buttons;
