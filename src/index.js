import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import '../styles/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = createRoot(document.getElementById('root'));
root.render(<App />);