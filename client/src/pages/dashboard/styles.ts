import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from {
		opacity: 0;
		transform: translateY(-50%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-areas: 'status status' 'sidebar chat';
	grid-template-columns: clamp(30rem, 20%, 50rem) auto;

	height: 100vh;

	overflow: hidden;

	.status {
		grid-area: status;
		background-color: #F4605C;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 1.4rem;
		font-weight: 300;

		animation: ${fade} 0.6s;
	}
`;

export const EmptyChat = styled.div`
	grid-area: chat;

	display: flex;	
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #999;

	p {
		font-size: 1.6rem;
		font-weight: bold;
		margin-top: 1rem;
	}	

	span {
		color: var(--primary);
	}

	svg {
		color: var(--primary);
		margin-bottom: 1rem;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.6rem;

		> button {
			margin-top: 1rem;
			outline: none;
			border: none;
			background: var(--quaternary);
			border: 1px solid var(--quaternary);
			color: var(--primary);
			padding: 1rem;
			border-radius: 444rem;
			font-size: 1.4rem;
			font-weight: bold;
			cursor: pointer;
			transition: filter 0.2s;

			min-width: 18rem;

			&:hover {
				filter: brightness(0.9);
			}

			&.outline {
				background-color: transparent;
			}
		}

	}

	svg + p {
		margin-bottom: 1.6rem;
	}
`;