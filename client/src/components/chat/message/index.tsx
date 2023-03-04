import React from 'react';
import dayjs from 'dayjs';

//? Styles
import * as s from './styles';

//? Types
import { MessagesProps } from '../../../context/conversations';

interface MessageProps {
    messageData: MessagesProps;
}

const Message: React.FC<MessageProps> = ({ messageData }) => {
    const messageRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const CHAT_MESSAGE_DIVIDER = '-%divider%-';

    const message = messageData.text.toString().split(CHAT_MESSAGE_DIVIDER);

    return (
        <s.Container ref={messageRef} isOwner={messageData.fromMe!}>
            <s.Sender>
                {messageData.fromMe ? 'You' : messageData.senderName}
                <span>{' - '}</span>
                {messageData.datetime === 'undefined'
                    ? 'Invalid date'
                    : dayjs(messageData.datetime).format('HH:mm')}
            </s.Sender>

            <s.Msg isOwner={messageData.fromMe!}>
                {/* <s.MsgItem>{messageData.text}</s.MsgItem> */}

                {message.map((item, index) => (
                    <s.MsgItem key={index}>{item}</s.MsgItem>
                ))}
            </s.Msg>
        </s.Container>
    );
};

export default Message;
