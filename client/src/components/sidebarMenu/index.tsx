import React from 'react';

//? Icons
import { AddressBook, Chats } from 'phosphor-react';

import * as s from './styles';

type SidebarMenuProps = {
    id: string;
    handleChangeMenu: () => void;
    setActiveKey: React.Dispatch<
        React.SetStateAction<'contacts' | 'conversations'>
    >;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    id,
    handleChangeMenu,
    setActiveKey,
}) => {
    return (
        <s.Container>
            <s.MenuListCanvas onClick={handleChangeMenu} />
            <s.SideMenu>
                <s.UserInfo>
                    <s.UserAvatar />
                    <s.UserDetails>
                        <span>Your ID</span>
                        <s.UserId>{id}</s.UserId>
                    </s.UserDetails>
                </s.UserInfo>

                <s.MenuList>
                    <s.MenuItem
                        onClick={() => {
                            setActiveKey('contacts');
                            handleChangeMenu();
                        }}
                    >
                        <s.MenuItemButton>
                            <AddressBook size={32} weight="fill" />
                            Contacts
                        </s.MenuItemButton>
                    </s.MenuItem>
                    <s.MenuItem
                        onClick={() => {
                            setActiveKey('conversations');
                            handleChangeMenu();
                        }}
                    >
                        <s.MenuItemButton>
                            <Chats size={32} weight="fill" /> Conversations
                        </s.MenuItemButton>
                    </s.MenuItem>
                </s.MenuList>

                <s.MenuFooter>
                    <span>Web chat v0.0.1</span>
                </s.MenuFooter>
            </s.SideMenu>
        </s.Container>
    );
};

export default SidebarMenu;
