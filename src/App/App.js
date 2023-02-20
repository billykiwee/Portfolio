import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from '../Website/Home'
import ProjectView from '../Website/views/ProjectView'



export default function App() {


    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/ProjectView" exact element={<ProjectView />} />
                </Routes>
            </main>
        </BrowserRouter>
                
    )

}
