import React from 'react';
import { ContactsContext, ContactsContextData } from '../context/contacts';

export function useContacts(): ContactsContextData {
    const context = React.useContext(ContactsContext);

    if (!context) {
        throw new Error('useContacts must be used within an ContactsProvider');
    }

    return context;
}
