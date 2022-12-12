import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useStateValue } from './components/StateProvider'

import Home from '../Website/Home'

import { getAuth } from "firebase/auth"

import { db } from './database/firebase'
import Game from '../Website/Game'
import ProjectView from '../Website/views/ProjectView'
import GCSS from '../GCSS'



export default function App() {


    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/game" exact element={<Game />} />
                    <Route path="/ProjectView" exact element={<ProjectView />} />
                   {/*  <Route path="/GCSS" exact element={<GCSS />} /> */}
                </Routes>
            </main>
        </BrowserRouter>
                
    )

}
