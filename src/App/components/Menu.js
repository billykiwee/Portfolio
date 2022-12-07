import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from './Container'
import { useStateValue } from './StateProvider'


export default function Menu({on, ShopID, onClick}) {

    const [{user}] = useStateValue()
    
    if (on)
    return (

        <div className='fixed white w-100 h-100 m-t-0' style={{zIndex : 12}}>
            <Container style='m-t-2'>
                <div className='grid'>
                    <div className='display m-b-2'>
                        <span className='f-s-2rem f-w-500'>Menu</span>
                    </div>
                    <ul className='grid gap'>
                        <ListMenu icon='home' txt='Home' link='/' click={onClick}/>
                        <ListMenu icon='pricing' txt='Tarifs' link='/pricing' click={onClick}/>
                        <ListMenu icon='shop' txt='Shop' link='shop' click={onClick}/>
                        <ListMenu icon='login' txt='Connexion' link='login' click={onClick}/>
                        <li className='display' >
                            <a href={user ? `/${ShopID}/dashboard` : 'signup'} className='w-100' >
                                <button className='h-4 blue border-r-1'>
                                    {
                                        user 
                                        ? <span className='display f-s-18'>Aller au dashboard</span>
                                        : <span className='display f-s-18'>Créer un compte</span>
                                    }
                                </button>
                            </a>
                        </li>

                        <li className='display justify-c m-t-1'>
                            <small className=''>Développé par <a href='https://www.kiwee.site' className='link hover-link'>kiwee.site</a></small>
                        </li>
                    </ul>

                </div>
            </Container>            
        </div>
    )
}


function ListMenu({icon, txt, link, click}) {
    return (
        <li className='display' id='menu-link' >
            <Link to={link} className='display w-100 border hover border-r-1 p-1 click' onClick={click}>
                <div className='display'>
                    <span className='display m-r-1'>
                        <img src={'/images/'+ icon + '.svg'} width={24} height={24} />
                    </span>
                    <span className='f-s-18 f-w-500'>{txt}</span>
                </div>
            </Link>
        </li>
    )
}