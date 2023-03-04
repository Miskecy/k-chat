import React from 'react';

//? Hooks
import { useContacts } from '../../hooks/useContacts';

//? Styles
import * as s from './styles';

//? Types
type NewContactModalProps = {
    show: boolean;
    onHide: () => void;
};

const NewContactModal: React.FC<NewContactModalProps> = ({ show, onHide }) => {
    const IdRef = React.useRef<HTMLInputElement>(null);
    const NameRef = React.useRef<HTMLInputElement>(null);
    const { createContact } = useContacts();

    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!IdRef.current?.value || !NameRef.current?.value) return;

            createContact(IdRef.current.value, NameRef.current.value);
            onHide();
        },
        []
    );

    if (!show) return null;

    return (
        <s.Container>
            <s.ModalContainer>
                <s.ModalHeader>
                    <s.ModalTitle>
                        <h3>Create Contact</h3>
                    </s.ModalTitle>
                </s.ModalHeader>

                <s.ModalBody>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <s.FormGroup>
                            <input
                                type="text"
                                id="id"
                                required
                                ref={IdRef}
                                placeholder="ID"
                            />
                        </s.FormGroup>

                        <s.FormGroup>
                            <input
                                type="text"
                                id="name"
                                required
                                ref={NameRef}
                                placeholder="Name"
                            />
                        </s.FormGroup>
                    </form>
                </s.ModalBody>

                <s.ModalFooter>
                    <button type="submit" form="contact-form">
                        Add Contact
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

export default NewContactModal;
