import styled from 'styled-components';

export const Container = styled.div`
	display: grid;

	place-items: center;
`;

export const ModalCanvas = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
	max-width: 40rem;
	max-height: 50rem;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background-color: var(--secondary);
	border-radius: 0.5rem;
	z-index: 1;

	display: flex;
	flex-direction: column;
`;

export const ModalHeader = styled.div`
	display: flex;
	gap: 0.6rem;
	flex-direction: column;
	border-bottom: 1px solid var(--tertiary);
	padding: 1.6rem 1.6rem 1.6rem;
`;

export const ModalTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.6rem;
	color: var(--primary);

	svg {
		cursor: pointer;

		* {
			color: var(--primary);
		}
	}
`;

export const ModalBody = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	overflow-y: auto;
	padding-block: 1.6rem;

	form {
		display: flex;
		flex-direction: column;

		width: 100%;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	
	label {
		padding: 1.6rem;
		font-size: 1.4rem;
		font-weight: bold;
		color: var(--primary);
		text-transform: capitalize;

		display: flex;
		align-items: center;
		gap: 1rem;

		width: 100%;

		&:hover {
			background-color: var(--quaternary);	
		}
	}	

	input[type="checkbox"] {
		appearance: none;
		outline: none;
		background-color: var(--tertiary);
		border-radius: 0.4rem;
		width: 1.6rem;
		height: 1.6rem;
		cursor: pointer;

		&:checked {
			//background-color: var(--primary);

			&:after {
				content: "";
				display: block;
				width: 1rem;
				height: 1rem;
				background-color: var(--quaternary);
				border-radius: 0.2rem;
				
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

			}
		}
	}	
`;

export const ModalFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.6rem;

	border-top: 1px solid var(--tertiary);


	button {
		outline: none;
		background-color: transparent;
		border: none;
		color: var(--primary);
		font-size: 1.4rem;
		font-weight: bolder;
		cursor: pointer;

		padding: 1rem 1.8rem;
		border-radius: 0.4rem;

		&:hover {			
			background-color: rgba(255, 255, 255, 0.1);
		}
	}

	/* & > button:first-child {
		//background-color: var(--primary);
		color: #169CE4;

		&:hover {			
			background-color: #169CE410;
		}
	} */

	& > button:nth-child(2) {
		//background-color: var(--primary);
		color: #F4605C;

		&:hover {			
			background-color: #F4605C10;
		}
	}
`;

export const NoContacts = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: 1.4rem;
		padding: 3rem 3.6rem 3.6rem;
	}
`;