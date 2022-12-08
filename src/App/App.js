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


/*     const properties = [
        {name: 'w-'  , style : 'width'},
        {name: 'h-'  , style : 'height'},
        {name: 'm-t-', style : 'margin-top'},
        {name: 'm-b-', style : 'margin-bottom'},
        {name: 'm-l-', style : 'margin-left'},
        {name: 'm-r-', style : 'margin-right'},
        {name: 'p-t-', style : 'padding-top'},
        {name: 'p-b-', style : 'padding-bottom'},
        {name: 'p-l-', style : 'padding-left'},
        {name: 'p-r-', style : 'padding-right'},
    ]          
    
    
    useEffect(e=> {
        for (let i = 0; i < 1000; i++) {
            for (const v in properties) {

                if (document.querySelector('.' + properties[v].name + i))
                document.querySelector('.' + properties[v].name + i).style = `${properties[v].style}:${i}px;`
            }
        }
    }, []) */
    


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
