import React from 'react';

//? Icons
import { PaperPlaneRight } from 'phosphor-react';

//? Styles
import * as s from './styles';

//? Types
type BtnSendMessageProps = {
    handleSendMessage: (value: string | undefined) => void;
    value: string;
};

const BtnSendMessage: React.FC<BtnSendMessageProps> = ({
    handleSendMessage,
    value,
}) => {
    const InputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (InputRef.current) InputRef.current.value = value;
    }, [value]);

    return (
        <s.Container>
            <s.Input ref={InputRef} placeholder="Write a message..." />

            <s.BtnSend
                onClick={() => handleSendMessage(InputRef.current?.value)}
                type="submit"
                form="chat-form"
            >
                <PaperPlaneRight size={30} weight="fill" />
            </s.BtnSend>
        </s.Container>
    );
};

export default BtnSendMessage;
