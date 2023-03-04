import styled from 'styled-components';

export const Container = styled.div`	
`;

export const HeaderUserInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`;

export const UserPhoto = styled.img`
	width: 4.8rem;
	height: 4.8rem;
	border-radius: 50%;	
`;

export const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

export const UserName = styled.h1`
	font-size: 1.6rem;
	line-height: 1.87rem;
	color: #FFFFFF;
`;

export const UserStatus = styled.div`
	display: flex;
	align-items: baseline;	
	gap: 0.4rem;
`;

export const BulletStatus = styled.div`
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	background-color: #00B37E;
	flex-grow: 0;
`;

export const Status = styled.span`
	font-size: 1.2rem;
	color: #00B37E;
`;

export const CloseBtn = styled.button`
	all: unset;

	svg {
		* {
			color: #fff;
		}
	}

	&:hover {
		cursor: pointer;
	}
`;

export const HeaderLastSeen = styled.div``;

export const LastSeen = styled.div`
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: #FFFFFF;

	text-align: center;
	margin-top: 1.4rem;
`;