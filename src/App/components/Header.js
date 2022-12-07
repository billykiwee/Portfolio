import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../database/firebase'
import Menu from './Menu'
import { useStateValue } from './StateProvider'


export default function Header({ShopProfile}) {

    const [ShowMenu, setShowMenu] = useState(false)

    const [{user}] = useStateValue()
    const [UserCart, setUserCart] = useState([])
    
    useEffect(()=> {

        db.collection('client').doc(user?.email).collection('cart').doc(ShopProfile?.id).collection('items').onSnapshot(snapshot => {
            setUserCart(snapshot.docs.map(doc => doc.data()))
        })

    },[ShopProfile?.id, user?.email])


    return (
        <>
            <header className='display fixed h-4 white shadow w-100' style={{top: 0, zIndex: 10}}>
                <div className='display justify-s-b w-88 m-auto'>

                    <div className='display'>

                        <div className='display'>
                            <Link to={ShopProfile?.id ?? '/'} className='display' onClick={e=> setShowMenu(false)} >
                                <img src={ShopProfile?.logo ?? '/images/logo.png'} className='border-r-100' width={40} height={40} />
                                {
                                    ShopProfile?.name &&
                                    <span className='f-s-20 f-w-500 m-l-04'>{ShopProfile?.name}</span>
                                }
                            </Link>
                        </div>
                    </div>
                    
                    <div className='display gap-04'>
                        {
                            ShopProfile?.id &&
                            <Link to={ShopProfile?.id + '/cart'} className='display justify-e align-top' >
                                <button className='display justify-c click hover w-2_5 h-2_5 border-r-100' onClick={e=> setShowMenu(false)} >
                                    <span className='display'>
                                        {
                                            window.location.href.includes('cart')
                                            ? <img src='/images/cart-solid.svg' width={22} />
                                            : <img src='/images/cart.svg' width={22} />
                                        }
                                    </span>
                                </button>
                                {
                                    UserCart.length > 0 &&
                                    <div className='display justify-c border-r-100 w-1 h-1 f-s-10 red absolute' style={{marginTop: '6px'}}>
                                        <span>{UserCart.length}</span>
                                    </div>
                                }
                            </Link>
                        }

                        <button className='display justify-c click hover w-2_5 h-2_5 border-r-100' onClick={e=> setShowMenu(ShowMenu === true ? false : true)} >
                            <span className='display'>
                                <img src='/images/hamburger.svg' width={22} />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <Menu on={ShowMenu} ShopID={ShopProfile?.id} onClick={e=> setShowMenu(false)} />
        </>
    )
}
