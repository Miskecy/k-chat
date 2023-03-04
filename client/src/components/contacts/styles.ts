import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const ContactList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

export const ContactItem = styled.li`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	transition: background 0.8s;
	padding: 1rem 1.6em ;
	position: relative;

	&:hover {
		background-color: var(--quaternary);
		cursor: pointer;
	}

	&::after {
		content: '';
		display: block;
		right: 1.6rem;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 999rem;
		background-color: var(--quinary);
		position: absolute;
	}
`;

export const ContactAvatar = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	color: var(--primary);
`;

export const ContactName = styled.h3`
	font-size: 1.6rem;
	color: var(--primary);
	text-transform: capitalize;
`;
