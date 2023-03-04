import React from 'react';
import { AuthProvider } from './auth';

//? Contexts
import { ContactsProvider } from './contacts';
import { ConversationsProvider } from './conversations';
import { SocketProvider } from './socket';

type Props = {
    children?: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
    return (
        <AuthProvider>
            <SocketProvider>
                <ContactsProvider>
                    <ConversationsProvider>{children}</ConversationsProvider>
                </ContactsProvider>
            </SocketProvider>
        </AuthProvider>
    );
};

export default ContextProvider;
