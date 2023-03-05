import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from '../Website/Home'
import Facture, { PROJECT_DATA } from '../Website/Facture/Facture'



export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Facture" element={<Facture { ...PROJECT_DATA } />} />
                    </Routes>
                </main>
            </BrowserRouter>
                    
        )
    }
}
