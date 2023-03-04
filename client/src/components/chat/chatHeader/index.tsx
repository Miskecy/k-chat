import React from 'react';

//? Icons
import { X } from 'phosphor-react';

//? Styles
import * as s from './styles';

//? Types
import { FormattedConversationsProps } from '../../../context/conversations';

type ChatHeaderProps = {
    conversationData: FormattedConversationsProps;
    selectConversation: (value: number) => void;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({
    conversationData,
    selectConversation,
}) => {
    return (
        <s.Container>
            <s.HeaderUserInfo>
                <s.UserInfo>
                    <s.UserPhoto src="https://randomuser.me/api/portraits/women/51.jpg" />
                    <s.UserDetails>
                        <s.UserName>
                            {conversationData.recipients
                                .map(r => r.name)
                                .join(', ')}
                        </s.UserName>
                        <s.UserStatus>
                            <s.BulletStatus />
                            <s.Status>Online</s.Status>
                        </s.UserStatus>
                    </s.UserDetails>
                </s.UserInfo>
                <s.CloseBtn onClick={() => selectConversation(-1)}>
                    <X size={28} weight="duotone" />
                </s.CloseBtn>
            </s.HeaderUserInfo>
            <s.HeaderLastSeen>
                <s.LastSeen>Today 12:32 PM</s.LastSeen>
            </s.HeaderLastSeen>
        </s.Container>
    );
};

export default ChatHeader;
