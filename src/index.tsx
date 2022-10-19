import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles.scss';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement as Element);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
