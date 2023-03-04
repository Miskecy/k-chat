import React from 'react';

//? Hooks
import { useContacts } from '../../hooks/useContacts';
import { useConversations } from '../../hooks/useConversations';

//? Styles
import * as s from './styles';

//? Types
type NewContactModalProps = {
    show: boolean;
    onHide: () => void;
};

const NewConversationModal: React.FC<NewContactModalProps> = ({
    show,
    onHide,
}) => {
    const { contacts } = useContacts();
    const { createConversation } = useConversations();
    const [selectedContactIds, setSelectedContactIds] = React.useState<
        string[]
    >([]);

    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (selectedContactIds.length === 0) return;

            createConversation(selectedContactIds);
            onHide();
        },
        [selectedContactIds]
    );

    const handleCheckboxChange = (contactId: string) => {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId;
                });
            } else {
                return [...prevSelectedContactIds, contactId];
            }
        });
    };

    if (!show) return null;

    return (
        <s.Container>
            <s.ModalContainer>
                <s.ModalHeader>
                    <s.ModalTitle>
                        <h3>Create Conversation</h3>
                    </s.ModalTitle>
                </s.ModalHeader>

                <s.ModalBody>
                    <form id="conversation-form" onSubmit={handleSubmit}>
                        {contacts.length != 0 ? (
                            contacts.map((contact, index) => (
                                <s.FormGroup key={contact.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={
                                                selectedContactIds.includes(
                                                    contact.id
                                                )
                                                    ? 'true'
                                                    : 'false'
                                            }
                                            onChange={() =>
                                                handleCheckboxChange(contact.id)
                                            }
                                        />
                                        {contact.name}
                                    </label>
                                </s.FormGroup>
                            ))
                        ) : (
                            <s.NoContacts>
                                <p>You don't have any contacts yet.</p>
                            </s.NoContacts>
                        )}
                    </form>
                </s.ModalBody>

                <s.ModalFooter>
                    <button type="submit" form="conversation-form">
                        Create Conversation
                    </button>
                    <button type="button" onClick={onHide}>
                        Close
                    </button>
                </s.ModalFooter>
            </s.ModalContainer>
            <s.ModalCanvas onClick={onHide} />
        </s.Container>
    );
};

export default NewConversationModal;
