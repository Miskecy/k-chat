import React from 'react';

//? Icons
import { List } from 'phosphor-react';

//? Styles
import * as s from './styles';

//? Components
import Conversations from '../conversations';
import Contacts from '../contacts';
import SidebarMenu from '../sidebarMenu';
import NewConversationModal from '../newConversationModal';
import NewContactModal from '../newContactModal';

//? Types
type SidebarProps = {
    id: string;
};

const Sidebar: React.FC<SidebarProps> = ({ id }) => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState<
        'contacts' | 'conversations'
    >('conversations');

    const conversationsOpen = React.useMemo(() => {
        return activeKey === 'conversations';
    }, [activeKey]);

    const handleChangeMenu = React.useCallback(() => {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }, [openMenu]);

    const handleCloseModal = React.useCallback(() => {
        setOpenModal(false);
    }, [openModal]);

    return (
        <s.Container>
            <s.SideHeader>
                <s.Menu onClick={handleChangeMenu}>
                    <List size={32} weight="duotone" />
                </s.Menu>
                <s.Search>
                    <input type={'text'} placeholder={'Search'} />
                </s.Search>
            </s.SideHeader>

            <s.SideBody>
                {conversationsOpen ? <Conversations /> : <Contacts />}
            </s.SideBody>

            {/* <s.SideFooter>
                <button onClick={() => setOpenModal(true)}>
                    {conversationsOpen ? 'New conversation' : 'New contact'}
                </button>
            </s.SideFooter>

            {conversationsOpen ? (
                <NewConversationModal
                    show={openModal}
                    onHide={handleCloseModal}
                />
            ) : (
                <NewContactModal show={openModal} onHide={handleCloseModal} />
            )} */}

            {openMenu && (
                <SidebarMenu
                    id={id}
                    handleChangeMenu={handleChangeMenu}
                    setActiveKey={setActiveKey}
                />
            )}
        </s.Container>
    );
};

export default Sidebar;
