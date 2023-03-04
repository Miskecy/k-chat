import styled from 'styled-components';

export const Container = styled.div`
  
`;


export const MenuListCanvas = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.5);
`;

export const SideMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	background-color: #1E1E1E;

	
	width: 30rem;

	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;

	transition: transform 0.2s;	
`;

export const UserInfo = styled.div`
	background-color: #333;
	padding: 3.2rem;
	border-bottom: 1px dashed var(--secondary);
	border-right: 1px solid var(--tertiary);

	display: flex;
	align-items: center;

	height: 15vh;
`;

export const UserAvatar = styled.div``;

export const UserDetails = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	color: var(--primary);
`;

export const UserId = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	color: #ccc;
	margin-top: 0.5rem;
`;

export const MenuList = styled.ul`
	flex: 1;
	padding-block: 1.6rem;

	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	z-index: 11;
`;

export const MenuItem = styled.li`
	list-style: none;
	width: 100%;

	padding: 1rem 2.5rem;
	//border: 1px solid var(--tertiary);
	
	transition: background 0.2s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
		cursor: pointer;	
	}
`;

export const MenuItemButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	background: none;
	border: none;
	outline: none;

	color: var(--primary);
	font-size: 1.4rem;
	font-weight: 600;

	svg {		
		* {
			color: var(--primary);
		}
	}
`;

export const MenuFooter = styled.div`
	height: 5vh;
	padding: 3.2rem;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	color: var(--primary);
	font-size: 1.4rem;
	font-weight: bold;
`;
