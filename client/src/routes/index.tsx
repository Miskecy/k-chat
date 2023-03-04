import React from 'react';
import { Routes, Route } from 'react-router-dom';

//? Components
import Public from './public';

const MyRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/*" element={<Public />} />
        </Routes>
    );
};

export default MyRoutes;
