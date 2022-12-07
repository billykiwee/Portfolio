import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopCard({shop, id}) {

    return (
        <div className='grid m-b-2 p-r-2' id={'slide-slider-' + id}>
                <div className='grid m-b-1'>
                    <div className='display w-100' style={{width: '244px', height: '244px'}} >
                        <img src={shop.photos[0]} className='border-r-1 w-100 h-100' />
                    </div>
                </div>
                <div className='display justify-s-b w-100'>
                    <div className='grid gap justify-s-b w-100'>
                        <div className='display'>
                            <img src={shop.logo} className='border-r-100' width={44} height={44} />
                            <div className='display m-l-1'>
                                <div className='display'>
                                    <span className='f-s-18'>{shop.name}</span>
                                </div>
                            </div>
                        </div>
                        <div className='display'>
                            <Link to={'/' + shop.id} className='w-88 margin-auto' >
                                <button className='grey border hover h-2 p-lr-1 border-r-04'>
                                    <span className='f-s-16'>Voir</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}
