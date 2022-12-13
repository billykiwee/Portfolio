import React, { useEffect } from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '../App/components/Container'
import { minimizeString } from '../App/utils/minimizeString';
import { ProfilImg } from './Home';


const MAX_LINK_BEFORE_UPDATE = 3


export default function Game() {

    const [Input,setInput] = useState(window.location.href)

    const [QrCodeGenerated, setQRCodeGenerated] = useState('')
    const [UserLinks, setUserLinks] = useState([])

    const char = 'azertyuiopqsdfghjklmwxcvbn_' + 'azertyuiopqsdfghjklmwxcvbn'.toLocaleUpperCase() + '1234567890'


    const [Error, setError] = useState('')

    function generateQRCode(input) {

        if (MAX_LINK_BEFORE_UPDATE > UserLinks.length) {

            if (Input.includes('.')) {

                setQRCodeGenerated(input)
        
                let r = 'loop.me/'
            
                for (let i = 0; i < 5; i++) {
                    r += char[Math.floor(Math.random() * char.length)]
                }    
        
                let link = {
                    id : r,
                    user: 'user',
                    link: input.toLowerCase(),
                    shortLink: r,
                    date: Date()
                }    

        
                setUserLinks([...UserLinks, link])
            }
        }
        else {
            setError('Tu dois rentrer un URL valide')
        }
    }    




    return (

        <Container>
            


            <div className='p-1 m-b-1'>
                <header className='display justify-s-b'>
                    <div className='display gap'>
                        <img src='/images/logo.png' className='w-2 h-2' />
                    </div>
                    <div className='display gap'>
                        <img src={ProfilImg} className='border-r-100 w-2 h-2' />
                        <button className='w-2 h-2'>
                            <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect class="hamburger_change" width="100" height="16" fill="black"></rect>
                                <rect class="hamburger_change1" id="x2" y="31" width="53.5088" height="16" fill="black"></rect>
                                <rect class="hamburger_change2" id="x3" y="62" width="100" height="16" fill="black"></rect>
                            </svg>
                        </button>
                    </div>
                </header>
            </div>


            <div className='grid gap-2rem'>

            <div className='grid gap-2rem'>
                <img className='w-100p border-r-2' height={300} src='https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60' />

                <div className='grid gap'>
                    <div>
                        <span className='f-s-25 f-w-500'>Créer un lien</span>
                    </div>
                    <div className='display gap'>
                        <div className='display w-100p'>
                            <input type='text' onChange={e=> {setInput(e.target.value); setError('')}} className='div-input h-3 border-r-1 w-100p white' placeholder='Enter your website URL' />
                        </div>
                        <div className='display'>
                            <button onClick={e=> generateQRCode(Input)} className='border-r-1 blue h-3 p-lr-2 border-b' >
                                <span className='f-s-16'>Créer</span>
                            </button>
                        </div>
                    </div>
                    {
                        Error && 
                        <div className='display'>
                            <small className='c-red'>{Error}</small>
                        </div>
                    }
                </div>

            </div>

            <div className='grid gap-2rem'>
                <div className='grid gap'>
                    <div>
                        <span className='f-s-25 f-w-500'>Mes liens</span>
                    </div>
                    {
                        UserLinks.filter(e=> e.date).map(userlink=> {
                            return (
                                <div className='display gap p-1 border-b border-r-1 justify-s-b white' id={userlink.id}>
                                    <div className='display gap-1rem w-50'>
                                        <a href={'https://' +QrCodeGenerated}>
                                            {/* <QRCode
                                                bgColor={'white'}
                                                fgColor={'black'}
                                                className='click'
                                                size={44}
                                                value={QrCodeGenerated}
                                            /> */}
                                            <img src={`http://www.google.com/s2/favicons?domain=${userlink.link}&sz=${256}`} className='w-2 h-2 border-r-100' />
                                        </a>
                                        <div className='grid '> 
                                            <div className='display gap'>
                                                <span className='f-s-16'>Lien</span>
                                                <small className='c-grey f-w-300' style={{fontStyle: 'italic'}}>{minimizeString(userlink.link, 10)}</small>
                                            </div>

                                            <div className='grid gap'>
                                                <div className='display gap'>
                                                    <a href={Input} className='link'>{userlink.shortLink}</a>
                                                    <div>
                                                        <button className='display border-r-04 w-2 h-2 border border-b' onClick={e=> navigator.clipboard.writeText(userlink.shortLink)} >
                                                            <img src='/images/copy.svg' className='w-1 h-1' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={'/' + userlink.shortLink.split('/')[1] + '/edit'}>
                                            <button>
                                                <span className='f-w-300'>voir</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }).reverse()
                    }

                </div>
                <div className='display justify-c'>
                    {
                        UserLinks.length < MAX_LINK_BEFORE_UPDATE 
                        ?
                        <div className='display gap'>
                            <img src='/images/info.svg' className='w-1 h-1 opacity'  />
                            <small className='c-grey f-w-300'>Il te reste encore {MAX_LINK_BEFORE_UPDATE - UserLinks.length} liens gratuit</small>
                        </div>
                        :
                        <div className='grid gap-04'>
                            <div className='display gap'>
                                <img src='/images/info.svg' className='w-1 h-1'  />
                                <small className='c-red f-w-300'>Tu dois upgrade ton compte</small>
                            </div>
                            <div className='display justify-c'>
                                <a className='f-w-300 link'>Voir les plans</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
            </div>


            

        </Container>
    )
}
