import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './App/css/style.css'


const element = document.getElementById('root')

if (element) {

    const root = ReactDOM.createRoot(element)
    
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}    

