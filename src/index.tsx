import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement as Element);

root.render(<App />);
