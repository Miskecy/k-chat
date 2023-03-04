import React from 'react';
import io from 'socket.io-client';
import { Socket } from 'socket.io-client/build/esm/socket';

//? Hooks
import { useAuth } from '../hooks/useAuth';

//? Types
export interface SocketContextData {
    socket?: Socket;
    isServerOnline: boolean;
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
    const [isServerOnline, setIsServerOnline] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!id) return;

        const socket = io('http://localhost:5000', {
            query: { id },
        });

        setSocket(socket);

        return () => {
            socket?.disconnect();
        };
    }, [id]);

    React.useEffect(() => {
        if (!socket) return;

        socket.on('connect', () => {
            setIsServerOnline(true);
        });

        socket.on('disconnect', () => {
            setIsServerOnline(false);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, [socket]);

    return (
        <SocketContext.Provider
            value={{
                socket,
                isServerOnline,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { SocketProvider, SocketContext };
