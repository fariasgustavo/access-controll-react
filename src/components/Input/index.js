import React from "react";
import { Input as StyledInput } from "../../styles";

const Input = ({ type, name, placeholder, onChange = () => {} }) => {
	return <StyledInput type={type} name={name} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
