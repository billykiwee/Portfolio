import React from 'react'

export default function CardTestimonial({txt, img, name}) {
    
    return (

        <div className='display border white border-r-1 p-1'>
            <div className='grid'>
                <div className='justify-c display w-100'>
                    <div className='grid justify-c'>
                        <img className='border-r-100' style={{width: '66px'}}  src={img}/>
                        <div className='display m-t-04 justify-c'>
                            <span className='f-s-18 f-w-500'>{name}</span>
                        </div>
                    </div>
                </div>
                <div className='m-l-1'>
                    <span className='opacity'>{txt}</span>
                </div>
            </div>
        </div>
    )
}
