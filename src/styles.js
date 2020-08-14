import styled from "styled-components";

export const Button = styled.button`
	line-height: 35px;
	height: 35px;
	width: ${(props) => (props.type === 'submit' ? "100%" : "100px")};
	border: 1px solid #38b1a3;
	background-color: #38b1a3;
	color: #fff;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 600;
`;

export const Input = styled.input`
    border: none;
    display: block;
    width: 100%;
    padding: 8px;
    height: 42px;
    margin: 10px 0;
    box-sizing: border-box;
    background-color: #dedede;
    border-radius: 4px;
`;

export const FormBox = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	height: ${(props) => (props.fullSize ? "100%" : "auto")};
	width: ${(props) => (props.fullSize ? "100%" : "auto")};
`;

export const FieldsBox = styled.div`
	margin: 0 auto;
	width: 300px;
	padding: 10px;
	box-sizing: border-box;
`;

export const SvgIcon = styled.i`
    width: 70px;
    fill: #38b1a3;
    display: block;
    margin: 0 auto 20px;
`;

export const Link = styled.a`
    text-align: center;
    font-size: ${props => props.light ? '12px' : '14px'};
    color: #8a8a8a;
    font-weight: ${props => props.light ? '200' : '500'};
    margin-top: 10px;
    display: ${props => props.block ? 'block' : 'inline'};
`;
