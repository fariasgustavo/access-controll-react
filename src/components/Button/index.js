import React from "react";
import { Button as StyledButton } from "../../styles.js";

const Button = ({ type }) => {
	return <StyledButton type={type}>Sign in</StyledButton>;
};

export default Button;
