import React from 'react';
import { Link } from 'react-router-dom';

//? Styles
import * as s from './styles';

//? Types
type LoginProps = {
    onIdSubmit: (id: string) => void;
};

const Login: React.FC<LoginProps> = ({ onIdSubmit }) => {
    const idRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onIdSubmit(idRef.current?.value || '');
    };

    const handleCreateNewAccount = () => {
        onIdSubmit(crypto.randomUUID());
    };

    return (
        <s.Container>
            <s.FormContainer>
                <form onSubmit={handleSubmit}>
                    <s.FormTitle>Welcome to UOL Chat</s.FormTitle>
                    <s.WrapperInput>
                        <s.FormInput
                            ref={idRef}
                            type="text"
                            placeholder="Enter your ID"
                        />
                    </s.WrapperInput>

                    <s.WrapperButton>
                        <s.BtnSubmit type="submit">Login</s.BtnSubmit>
                        <s.BtnCreateAccount
                            type="button"
                            onClick={handleCreateNewAccount}
                        >
                            Create Account
                        </s.BtnCreateAccount>
                    </s.WrapperButton>
                </form>
            </s.FormContainer>
        </s.Container>
    );
};

export default Login;
