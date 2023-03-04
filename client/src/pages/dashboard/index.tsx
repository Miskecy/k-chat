import React from 'react';

//? Icons
import { Chats } from 'phosphor-react';

//? Components
import Sidebar from '../../components/sidebar';
import Chat2 from '../chat2';

//? Hooks
import { useConversations } from '../../hooks/useConversations';
import { useContacts } from '../../hooks/useContacts';

//? Styles
import * as s from './styles';

//? Modals
import NewConversationModal from '../../components/newConversationModal';
import NewContactModal from '../../components/newContactModal';

//? Types
type DashboardProps = {
    id: string;
};

const Dashboard: React.FC<DashboardProps> = ({ id }) => {
    const { selectedConversation } = useConversations();
    const { contacts } = useContacts();
    const [openModal, setOpenModal] = React.useState<{
        target: string;
        isOpen: boolean;
    }>({ target: '', isOpen: false });

    const handleCloseModal = React.useCallback(
        (target: string) => {
            setOpenModal({ target, isOpen: false });
        },
        [openModal]
    );

    return (
        <s.Container>
            <Sidebar id={id} />
            {selectedConversation ? (
                <Chat2 />
            ) : (
                <s.EmptyChat>
                    <Chats size={60} weight="fill" />

                    {contacts.length === 0 ? (
                        <>
                            <p>
                                <span>Create</span> a new contact to start a
                                conversation
                            </p>

                            <div>
                                <button
                                    className="outline"
                                    onClick={() =>
                                        setOpenModal({
                                            target: 'contacts',
                                            isOpen: true,
                                        })
                                    }
                                >
                                    New contact
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>
                                <span>Select</span> or <span>create</span> a new
                                conversation
                            </p>

                            <div>
                                <button
                                    className="outline"
                                    onClick={() =>
                                        setOpenModal({
                                            target: 'conversations',
                                            isOpen: true,
                                        })
                                    }
                                >
                                    New conversation
                                </button>

                                <p>or</p>
                                <button
                                    className="outline"
                                    onClick={() =>
                                        setOpenModal({
                                            target: 'contacts',
                                            isOpen: true,
                                        })
                                    }
                                >
                                    New contact
                                </button>
                            </div>
                        </>
                    )}

                    <NewConversationModal
                        show={
                            openModal.target === 'conversations' &&
                            openModal.isOpen
                        }
                        onHide={() => handleCloseModal('conversations')}
                    />
                    <NewContactModal
                        show={
                            openModal.target === 'contacts' && openModal.isOpen
                        }
                        onHide={() => handleCloseModal('contacts')}
                    />
                </s.EmptyChat>
            )}
        </s.Container>
    );
};

export default Dashboard;
