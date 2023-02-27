import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/css/style.css'
import App from './App/App';
import reducer, { initialState } from './Website/reducer/reducer';
import { StateProvider } from './Website/reducer/StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer} >
            <App />
        </StateProvider>
    </React.StrictMode>
)

