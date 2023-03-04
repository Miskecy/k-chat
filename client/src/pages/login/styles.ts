import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	place-items: center;

	height: 100vh;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	form {
		padding: 8rem 6rem;
		background : var(--secondary);
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: .5rem;

		gap: 2rem;		
	}
`;

export const FormTitle = styled.h1`
	font-size: 1.6rem;
	font-weight: 300;
	color: var(--primary);
	margin-bottom: 0.8rem;
`;

export const WrapperInput = styled.div`
	flex: 1;
	width: 100%;
	overflow: hidden;
`;

export const FormInput = styled.input`	
	outline: none;
	background-color: transparent;
	border: 1px solid var(--tertiary);
	border-radius: 9999rem;
	padding: 1.4rem 2.4rem;

	font-size: 1.4rem;
	color: var(--primary);
	width: 100%;

	&::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
`;

export const WrapperButton = styled.div`
	display: flex;
	width: 100%;
	gap: 2rem;

	& > button {
		min-width: 12rem;
	}
`;

export const BtnSubmit = styled.button`
	all: unset;
	max-width: fit-content;
	background-color: var(--quaternary);
	color: var(--primary);

	font-size: 1.4rem;
	border-radius: 9999rem;
	padding: 1.4rem 2.4rem;

	transition: filter 0.2s;

	width: 100%;

	text-align: center;

	&:hover {
		filter: brightness(0.9);
		cursor: pointer;
	}
`;

export const BtnCreateAccount = styled.button`
	all: unset;
	
	background-color: var(--tertiary);
	color: var(--primary);

	font-size: 1.4rem;
	border-radius: 9999rem;
	padding: 1.4rem 2.4rem;

	transition: filter 0.2s;

	width: 100%;

	text-align: center;

	&:hover {
		filter: brightness(0.9);
		cursor: pointer;
	}
`;

