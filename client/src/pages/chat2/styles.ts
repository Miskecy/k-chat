import styled, { keyframes } from 'styled-components';

const shake = keyframes`
	0% {
		transform: translateX(0);
	}
	25% {
		transform: translateX(-0.5rem);
	}
	50% {
		transform: translateX(0);
	}
	75% {
		transform: translateX(0.5rem);
	}
	100% {
		transform: translateX(0);
	}
`;

export const Container = styled.div`
	/* height: 100vh;

	display: grid;
	place-items: center; */
	grid-area: chat;
`;

export const Chat = styled.div`
	background-color: #1A1924;
	/* max-width: 102.4rem;
	max-height: 63rem; */
	/* max-width: 103.4rem;
	max-height: 63rem; */
	height: 100vh;
	width: 100%;

	padding: 3.2rem 7.2rem;

	display: grid;
	grid-template-areas: 'header' 'body' 'footer';
	grid-template-rows: 7.6rem auto 7.6rem;
	grid-gap: 1rem;
`;

export const Header = styled.div`
	grid-area: header;
	
	display: flex;
	flex-direction: column;
`;

export const Body = styled.div`
	grid-area: body;

	padding-inline: 1.6rem;

	overflow-y: scroll;
	overflow-x: hidden;	

	direction: ltr;	

	// move top end of bottom
	&::-webkit-scrollbar-thumb {
		background-color: #633BBC;
		border-radius: 1rem;

		&:hover {			
			background-color: #633BBCc9;
		}
	}
		
	::-webkit-scrollbar {
		width: 10px;
		
	}
`;



export const Footer = styled.div`
	grid-area: footer;

	padding-inline: 1.6rem;
`;


