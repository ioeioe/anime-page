import React from "react";
import { FormInputContainer, Input } from "./form-input.styles";

const FormInput = ({ handleChange, ...otherProps }) => (
  <FormInputContainer>
    <Input onChange={handleChange} {...otherProps}></Input>
  </FormInputContainer>
);

export default FormInput;
