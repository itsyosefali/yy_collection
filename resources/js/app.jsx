import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main.jsx';
import '../css/app.css';

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
