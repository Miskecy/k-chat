import React from 'react';
import { Routes, Route } from 'react-router-dom';

//? Hooks
import { useAuth } from '../hooks/useAuth';

//? Components
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';

const Public: React.FC = () => {
    const { id, setId } = useAuth();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
                }
            />
        </Routes>
    );
};

export default Public;
