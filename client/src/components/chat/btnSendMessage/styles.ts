import styled from 'styled-components';

export const Container = styled.div`
	background-color: #282843;
	border-radius: 9999rem;
	display: flex;

	padding: 1.4rem 2.4rem;
`;

export const Input = styled.input`
	all: unset;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: #E1E1E6;
	
	flex: 1;

	&::placeholder {
		color: #E1E1E6;
	}
`;

export const BtnSend = styled.button`
	all: unset;
	cursor: pointer;
	
	svg {
		* {
			color: #fff;
		}
	}
`;

