import React from 'react';

//? Icons
import { X } from 'phosphor-react';

//? Styles
import * as s from './styles';

//? Hooks
import { useConversations } from '../../hooks/useConversations';

//? Components
import ChatHeader from '../../components/chat/chatHeader';
import BtnSendMessage from '../../components/chat/btnSendMessage';
import Message from '../../components/chat/message';

const Chat2: React.FC = () => {
    const listMessagesRef = React.useRef<HTMLDivElement>(null);

    const [text, setText] = React.useState<string>('');
    const { sendMessage, selectedConversation, selectConversation } =
        useConversations();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        sendMessage(
            selectedConversation.recipients.map(
                (recipient: any) => recipient.id
            ),
            text,
            new Date().toISOString()
        );
        setText('');
    };

    return (
        <s.Container>
            <s.Chat>
                <s.Header>
                    <ChatHeader
                        conversationData={selectedConversation}
                        selectConversation={selectConversation}
                    />
                </s.Header>

                <s.Body ref={listMessagesRef} className="cavalo">
                    {selectedConversation.messages.map(
                        (message, index: number) => {
                            return (
                                <Message key={index} messageData={message} />
                            );
                        }
                    )}
                </s.Body>

                <s.Footer>
                    <form id="chat-form" onSubmit={handleSubmit}>
                        <BtnSendMessage
                            handleSendMessage={value =>
                                setText(value as string)
                            }
                            value={text}
                        />
                    </form>
                </s.Footer>
            </s.Chat>
        </s.Container>
    );
};

export default Chat2;
