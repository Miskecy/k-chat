import React from 'react';

//? Hooks
import { useContacts } from '../hooks/useContacts';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAuth } from '../hooks/useAuth';
import { useSocket } from '../hooks/useSocket';

//? Types
import { ContactProps } from './contacts';

type NormalMessagesProps = {
    sender: string;
    text: string;
    datetime: string;
};

export type FormattedMessagesProps = {
    senderName?: string;
    fromMe?: boolean;
    sender: string;
    text: string;
    datetime: string;
};

export type MessagesProps = NormalMessagesProps & FormattedMessagesProps;

type RecipientsProps = {
    id: string;
    name: string;
};

export type FormattedConversationsProps = {
    messages: MessagesProps[];
    recipients: RecipientsProps[];
    selected: boolean;
    lastMessage: string;
};

export interface ConversationsContextData {
    conversations: FormattedConversationsProps[];
    createConversation: (recipients: string[]) => void;
    selectConversation: React.Dispatch<React.SetStateAction<number>>;
    selectedConversation: FormattedConversationsProps;
    sendMessage: (recipients: string[], text: string, datetime: string) => void;
}

type Props = {
    children?: React.ReactNode;
};

const ConversationsContext = React.createContext<ConversationsContextData>(
    {} as ConversationsContextData
);

const ConversationsProvider: React.FC<Props> = ({ children }) => {
    const { socket } = useSocket();
    const { contacts } = useContacts();
    const [conversations, setConversations] = useLocalStorage<
        {
            messages: MessagesProps[];
            recipients: string[];
        }[]
    >('conversations', []);
    const { id } = useAuth();
    const CHAT_MESSAGE_DIVIDER = '-%divider%-';

    const [selectedConversationIndex, setSelectedConversationIndex] =
        React.useState<number>(0);

    const createConversation = (recipients: string[]): void => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }];
        });
    };

    const addMessageToConversation = React.useCallback(
        ({
            recipients,
            text,
            sender,
            datetime,
        }: {
            recipients: string[];
            text: string;
            sender: string;
            datetime: string;
        }): void => {
            setConversations(prevConversations => {
                let madeChange = false;
                const newMessage = { sender, text, datetime };
                const newConversations = prevConversations.map(conversation => {
                    if (arrayEquality(conversation.recipients, recipients)) {
                        madeChange = true;
                        return {
                            ...conversation,
                            messages: [...conversation.messages, newMessage],
                        };
                    }

                    return conversation;
                });

                if (madeChange) {
                    return newConversations;
                } else {
                    return [
                        ...prevConversations,
                        { recipients, messages: [newMessage] },
                    ];
                }
            });
        },
        []
    );

    React.useEffect(() => {
        if (!socket) return;
        console.log('useMemo');

        socket.on(
            'receiveMessage',
            ({ recipients, text, sender, datetime }) => {
                addMessageToConversation({
                    recipients,
                    text,
                    sender,
                    datetime,
                });
            }
        );

        return () => {
            socket.off('receiveMessage');
        };
    }, [socket, addMessageToConversation]);

    const sendMessage = (
        recipients: string[],
        text: string,
        datetime: string
    ): void => {
        if (!socket || !id) return;

        socket.emit('sendMessage', { recipients, text, datetime });

        addMessageToConversation({ recipients, text, sender: id, datetime });
    };

    const formattedConversations: FormattedConversationsProps[] =
        conversations.map((conversation, index: number) => {
            const recipients = conversation.recipients.map((recipient: any) => {
                const contact = contacts.find((contact: ContactProps) => {
                    return contact.id === recipient;
                });
                const name = (contact && contact.name) || recipient;
                return { id: recipient, name };
            });

            const messages: MessagesProps[] = conversation.messages.map(
                (message: any) => {
                    const contact = contacts.find(contact => {
                        return contact.id === message.sender;
                    });
                    const name = (contact && contact.name) || message.sender;
                    const fromMe = id === message.sender;
                    return { ...message, senderName: name, fromMe };
                }
            );

            // reduce messages by sender to get consecutive messages into one object
            // const groupedMessages = messages.reduce(
            //     (acc: any, message: any) => {
            //         const lastMessage = acc[acc.length - 1];

            //         if (lastMessage && lastMessage.sender === message.sender) {
            //             lastMessage.text += `
            // 			${message.text}`;
            //             lastMessage.datetime = message.datetime;
            //             return acc;
            //         } else {
            //             return [...acc, message];
            //         }
            //     },
            //     []
            // );

            const groupedMessages = messages.reduce(
                (acc: any, message: any) => {
                    const lastMessage = acc[acc.length - 1];

                    if (lastMessage && lastMessage.sender === message.sender) {
                        lastMessage.text += `${CHAT_MESSAGE_DIVIDER}${message.text}`;
                        lastMessage.datetime = message.datetime;
                        return acc;
                    } else {
                        return [...acc, message];
                    }
                },
                []
            );

            //console.log(groupedMessages);

            // get last message of conversations by index
            const lastMessage = messages[messages.length - 1]?.text || '';

            const selected = index === selectedConversationIndex;

            console.log(index, selectedConversationIndex);

            return {
                ...conversation,
                messages: groupedMessages,
                recipients,
                selected,
                lastMessage,
            };
        });

    return (
        <ConversationsContext.Provider
            value={{
                conversations: formattedConversations,
                createConversation,
                selectConversation: setSelectedConversationIndex,
                selectedConversation:
                    formattedConversations[selectedConversationIndex],
                sendMessage,
            }}
        >
            {children}
        </ConversationsContext.Provider>
    );
};

const arrayEquality = (a: any, b: any) => {
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();

    return a.every((element: any, index: number) => {
        return element === b[index];
    });
};

export { ConversationsProvider, ConversationsContext };
