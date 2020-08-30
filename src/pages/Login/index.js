import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormBox, FieldsBox, SvgIcon, Link } from "../../styles";
import UserIcon from "../../assets/UserIcon.js";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	function handleSubmit(e){
		e.preventDefault();
		dispatch({
			type: 'LOGIN', 
			payload: {
				email,
				password
			}
		});
	}

	return (
		<FormBox fullSize>
			<form onSubmit={handleSubmit}> 
				<FieldsBox>
					<SvgIcon>
						<UserIcon/>
					</SvgIcon>
					
					<Input type="email" placeholder="Username" name="email" value={email} onChange={e => setEmail(e.target.value)} />
					<Input type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
					<Button type='submit' onClick={handleSubmit} />
					<Link href="#" light block>Forgot your password?</Link>
				</FieldsBox>
			</form>
		</FormBox>
	);
};

export default Login;
