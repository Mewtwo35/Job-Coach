import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './styles/application.scss';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement as Element);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
