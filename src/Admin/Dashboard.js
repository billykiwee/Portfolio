import React, { useEffect, useState } from 'react'
import Container from '../App/components/Container'
import TitleHeader from '../App/components/TitleHeader'
import { db } from '../App/database/firebase'

export default function Dashboard() {

       
    const [Shops, setShops] = useState([])

    useEffect(()=> {

        db.collection('shop').onSnapshot(snapshot => {
            setShops(snapshot.docs.map(doc => doc.data()))
        })

    },[])

    return (
        <Container>
            <TitleHeader title='Dashboard' />

            <div>
                <ul className='grid gap'>
                    {
                        Shops
                        .map(shop=> {
                            return (
                                <li key={shop?.id} className='display justify-s-b border-r-1 white p-1'>
                                    <div className='display gap'>
                                        <img src={shop?.photos[0]} className='w-2 h-2 border-r-1' />
                                        <span>{shop?.name}</span>
                                    </div>
                                    <div className=''>
                                        <button>
                                            <span>v</span>
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>   
        </Container>
    )
}
