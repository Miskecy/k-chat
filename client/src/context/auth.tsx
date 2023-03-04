import React from 'react';

//? Hooks
import useLocalStorage from '../hooks/useLocalStorage';

export interface AuthContextData {
    id: string | null;
    setId: React.Dispatch<React.SetStateAction<string | null>>;
}

type Props = {
    children?: React.ReactNode;
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [id, setId] = useLocalStorage<string | null>('id', null);

    return (
        <AuthContext.Provider
            value={{
                id,
                setId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
