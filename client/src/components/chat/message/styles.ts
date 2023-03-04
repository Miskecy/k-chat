import styled, { css } from 'styled-components';

type MessageProps = {
	isOwner: boolean;
}

const messageStyles = {
	sender: css`
		background-color: #07847E;
		border-radius: 1.4rem 1.4rem 0 1.4rem;
	`,
	receiver: css`
		background-color: #633BBC;
		border-radius: 0rem 1.4rem 1.4rem 1.4rem;
	`,
};

export const Container = styled.div<MessageProps>`
	display: flex;
	flex-direction: column;
	
	align-items: ${props => props.isOwner ? 'flex-end' : 'flex-start'};

	gap: 1rem;

	margin-top: 3rem;

	& + & {
		margin-bottom: 3rem;
	}	
`;

export const Sender = styled.span`
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: #E1E1E6;
`;

export const Msg = styled.div<MessageProps>`
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: #E1E1E6;
	
	${props => props.isOwner ? messageStyles.sender : messageStyles.receiver};

	padding: 1.4rem;	
	width: fit-content;
	max-width: 60%;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const MsgItem = styled.span``;

