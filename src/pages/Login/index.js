import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormBox, FieldsBox, SvgIcon, Link } from "../../styles";
import UserIcon from "../../assets/UserIcon.js";

const Login = () => {
	return (
		<FormBox fullSize>
			<FieldsBox>
                <SvgIcon>
                    <UserIcon/>
                </SvgIcon>
                
				<Input type="text" placeholder="Username" name="username" />
				<Input type="password" placeholder="Password" name="password" />
				<Button type='submit' />
                <Link href="#" light block>Forgot your password?</Link>
			</FieldsBox>
		</FormBox>
	);
};

export default Login;
