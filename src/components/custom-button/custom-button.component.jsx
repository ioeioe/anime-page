import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";
const CustomButton = ({ ...props }) => {
  return <CustomButtonContainer {...props}></CustomButtonContainer>;
};
export default CustomButton;
