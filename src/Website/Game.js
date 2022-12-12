import React, { useEffect } from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '../App/components/Container'


export default function Game() {



    const [Input,setInput] = useState('')

    const lol = 'azertyuiopqsdfghjklmwxcvbn_' + 'azertyuiopqsdfghjklmwxcvbn'.toLocaleUpperCase() + '1234567890'

    const [cool, setCool] = useState([])

    window.onclick = e => {

    }


    function Convert(input) {

        if (input.length > 0) {

            let r = ''
        
            for (let i = 0; i < 50; i++) {
                r += lol[Math.floor(Math.random() * lol.length)]
            }
         
            let msg = {
                message : input,
                crypto : r,
                date : new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()
            }
    
            if (!cool.includes(msg.message)) setCool([...cool, msg])
        }

    }


    console.log(cool);


    return (

        <Container>

            <div className='grid gap-2rem'>

                <div className='display gap m-t-4'>
                    <div className='display w-100p'>
                        <input type='text' onChange={e=> setInput(e.target.value)} className='div-input border-r-100 w-100p' />
                    </div>
                    <div className='display'>
                        <button onClick={e=> Convert(Input)} className='border-r-100 blue h-3 p-lr-2' style={{borderBottom: '6px solid rgba(0, 0, 0, 0.09)'}}>
                            <span>convertir</span>
                        </button>
                    </div>
                </div>

                <div className='grid gap'>
                    {
                        cool.map(w=> {

                            return (
                                <div className='display gap p-1 shadow border border-r-1'>
                                    <QRCode
                                        className='click'
                                        size={256}
                                        style={{ height: "50px", width: '50px'}}
                                        value={w.crypto}
                                        viewBox={`0 0 256 256`}
                                    />
                                    <div className='display justify-s-b w-100p'>
                                        <span>Message</span>
                                        <small className='c-grey'>{w.date}</small>
                                    </div>
                                </div>
                            )
                        }).reverse()
                    }
                </div>
            </div>
        </Container>
    )
}
