import React from 'react';

//? Icons
import { UserCircle } from 'phosphor-react';

//? Hooks
import { useConversations } from '../../hooks/useConversations';

//? Styles
import * as s from './styles';

const Conversations: React.FC = () => {
    const { conversations, selectConversation } = useConversations();
    return (
        <s.Container>
            <s.ConversationsList>
                {conversations.length != 0 ? (
                    conversations.map((conversation, index) => (
                        <s.ConversationItem
                            key={index}
                            onClick={() => selectConversation(index)}
                            className={conversation.selected ? 'selected' : ''}
                        >
                            <s.ConversationItemAvatar>
                                {/* <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" /> */}
                                <UserCircle size={60} />
                            </s.ConversationItemAvatar>
                            <s.ConversationItemInfo>
                                <s.ConversationItemName>
                                    {conversation.recipients
                                        .map(recipient => recipient.name)
                                        .join(', ')}
                                </s.ConversationItemName>
                                <s.ConversationItemLastMessage>
                                    <p>{conversation.lastMessage}</p>
                                </s.ConversationItemLastMessage>
                            </s.ConversationItemInfo>
                        </s.ConversationItem>
                    ))
                ) : (
                    <p>No conversations yet</p>
                )}
            </s.ConversationsList>
        </s.Container>
    );
};

export default Conversations;
