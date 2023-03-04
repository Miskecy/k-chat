import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

//? Types
export type ContactProps = {
    id: string;
    name: string;
};

export interface ContactsContextData {
    contacts: ContactProps[];
    createContact: (id: string, name: string) => void;
}

type Props = {
    children?: React.ReactNode;
};

//? Context
const ContactsContext = React.createContext<ContactsContextData>(
    {} as ContactsContextData
);

const ContactsProvider: React.FC<Props> = ({ children }) => {
    const [contacts, setContacts] = useLocalStorage<ContactProps[]>(
        'contacts',
        []
    );

    const createContact = (id: string, name: string) => {
        if (!id || !name) return;

        setContacts(prevContacts => {
            return [...prevContacts, { id, name }];
        });
    };

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                createContact,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};

export { ContactsProvider, ContactsContext };
