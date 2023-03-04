import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//? Context
import ContextProvider from './context';

//? Components
import MyRoutes from './routes';

//? Styles
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextProvider>
                <MyRoutes />
            </ContextProvider>
        </BrowserRouter>
        <GlobalStyles />
    </React.StrictMode>
);
