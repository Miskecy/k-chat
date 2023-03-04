import React from 'react';
import { AuthContext, AuthContextData } from '../context/auth';

export function useAuth(): AuthContextData {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
