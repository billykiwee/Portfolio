import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';

import './App/css/style.css'

const element = document.getElementById('root')

if (element) {
    ReactDOM.createRoot(element).render(<App />)
}


