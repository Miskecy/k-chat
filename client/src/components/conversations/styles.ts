import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	overflow-x: hidden;

	.selected {
		background-color: var(--tertiary);
	}
`;

export const ConversationsList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	width: 100%;

	> p {
		text-align: center;
		font-size: 1.6rem;
		color: #999;
		margin-top: 1rem;
	}
`;

export const ConversationItem = styled.li`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	padding: 1.6rem 2.8rem;
	width: 100%;
	
	color: var(--primary);

	&:hover {
		background-color: var(--tertiary);
		cursor: pointer;
	}
`;

export const ConversationItemAvatar = styled.div`
	img {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
	}
`;

export const ConversationItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;

	width: 100%;
`;

export const ConversationItemName = styled.div`
	h3 {
		font-size: 1.6rem;
	}
`;

export const ConversationItemLastMessage = styled.div`
	width: 100%;

	p {	
		overflow: hidden;
		white-space: nowrap; 
		width: 76%; 
		overflow: hidden;
		text-overflow: ellipsis; 
		font-size: 1.4rem;
		color: #999;
	}
`;
