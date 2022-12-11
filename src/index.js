import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/css/style.css'
import App from './App/App';
import reducer, { initialState } from './App/components/reducer'
import { StateProvider } from './App/components/StateProvider'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>

            <App />

    </React.StrictMode>
)

