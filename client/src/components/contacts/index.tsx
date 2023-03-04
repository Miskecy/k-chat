import React from 'react';

//? Icons
import { UserCircle } from 'phosphor-react';

//? Hooks
import { useContacts } from '../../hooks/useContacts';

//? Styles
import * as s from './styles';
import { ContactProps } from '../../context/contacts';

const Contacts: React.FC = () => {
    const { contacts } = useContacts();

    return (
        <s.Container>
            <s.ContactList>
                {contacts.map((contact: ContactProps) => (
                    <s.ContactItem key={contact.id}>
                        <s.ContactAvatar>
                            <UserCircle size={40} />
                        </s.ContactAvatar>
                        <s.ContactName>{contact.name}</s.ContactName>
                    </s.ContactItem>
                ))}
            </s.ContactList>
        </s.Container>
    );
};

export default Contacts;
