import React from 'react';
import { SocketContext, SocketContextData } from '../context/socket';

export function useSocket(): SocketContextData {
    const context = React.useContext(SocketContext);

    if (!context) {
        throw new Error('useSocket must be used within an SocketProvider');
    }

    return context;
}
