import React from "react";
import { Input as StyledInput } from "../../styles";

const Input = ({ type, name, placeholder }) => {
	return <StyledInput type={type} name={name} placeholder={placeholder} />;
};

export default Input;
