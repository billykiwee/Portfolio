import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from '../Website/Home'
import Facture from '../Website/Facture/Facture'



export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Facture" element={<Facture />} />
                    </Routes>
                </main>
            </BrowserRouter>
                    
        )
    }
}
