import React from 'react';
import {
    ConversationsContext,
    ConversationsContextData,
} from '../context/conversations';

export function useConversations(): ConversationsContextData {
    const context = React.useContext(ConversationsContext);

    if (!context) {
        throw new Error(
            'useConversations must be used within an ConversationsProvider'
        );
    }

    return context;
}
