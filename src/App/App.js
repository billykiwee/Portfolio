import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useStateValue } from './components/StateProvider'

import Home from '../Website/Home'

import { getAuth } from "firebase/auth"

import { db } from './database/firebase'
import Game from '../Website/Game'




export default function App() {


    const [{user}, dispatch] = useStateValue('')
    const auth = getAuth()
    
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // The user just ged in or the user is ged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else { 
                // The user is logged out
                dispatch({
                    type: 'OUT',
                    user: null
                })
            }
        })
    }, [dispatch, auth])


    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/game" exact element={<Game />} />
                </Routes>
            </main>
        </BrowserRouter>
                
    )

}
