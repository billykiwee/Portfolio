import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from '../Website/Home'
import { ProjectView } from '../Website/views/ProjectView'



export default function App(): JSX.Element {

    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ProjectView" element={<ProjectView />} />
                </Routes>
            </main>
        </BrowserRouter>
                
    )

}
