import React from 'react';
import io from 'socket.io-client';
import { Socket } from 'socket.io-client/build/esm/socket';

//? Hooks
import { useAuth } from '../hooks/useAuth';

//? Types
export interface SocketContextData {
    socket?: Socket;
}

type Props = {
    children?: React.ReactNode;
};

const SocketContext = React.createContext<SocketContextData>(
    {} as SocketContextData
);

const SocketProvider: React.FC<Props> = ({ children }) => {
    const { id } = useAuth();
    const [socket, setSocket] = React.useState<Socket>();

    React.useEffect(() => {
        if (!id) return;

        const newSocket = io('http://localhost:5000', {
            query: { id },
        });

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [id]);

    return (
        <SocketContext.Provider
            value={{
                socket,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { SocketProvider, SocketContext };
