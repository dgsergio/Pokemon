import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';
import App from './src/components/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
