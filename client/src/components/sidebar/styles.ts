import styled from 'styled-components';

export const Container = styled.div`
	grid-area: sidebar;

	background-color: var(--secondary);
	border: 1px solid var(--tertiary);
	
	display: flex;
	flex-direction: column;
`;

export const SideHeader = styled.div`
	display: flex;	
	align-items: center;
	gap: 1.6rem;
	padding: 3.2rem;

	position: relative;
`;

export const Menu = styled.button`
	all: unset;
	display: flex;
	align-items: baseline;
	justify-content: baseline;
	padding: 0.4rem 1rem;
	border-radius: 0.8rem;

	transition: background 0.2s;

	svg {
		* {
			color: var(--primary);
		}		
	}

	&:hover {
		cursor: pointer;
		//background-color: var(--tertiary);
		filter: brightness(0.9);
	}
`;

export const List = styled.div``;

export const Search = styled.div`
	flex: 1;

	input {
		width: 100%;
		//border: 1px solid var(--secondary);
		border: none;
		outline: none;
		border-radius: 888rem;
		padding: 1.5rem 2rem;
		background-color: var(--tertiary);
		color: var(--primary);	
		filter: brightness(0.89);	

		font-size: 1.4rem;
		
		&::placeholder {
			color: var(--primary);
		}
	}
`;

export const SideBody = styled.div`
	display: flex;
	flex: 1;
	overflow: auto;
`;

export const SideFooter = styled.div`
	padding: 3.2rem;

	button {
		border: none;
		outline: none;
		width: 100%;
		padding: 2rem;

		background-color: var(--quaternary);
		color: var(--primary);
		border-radius: 888rem;
		font-weight: bold;
		
	}
`;


