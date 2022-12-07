import React from 'react'

export default function Alert({state, text}) {
    
    if (state === true)
    return (
        <div className='fixed w-100 alert' >
            <div className='display justify-c margin-auto'>
                <div className='display gap h-2 border-r-04 white p-lr-1 border'>
                    <span className='display'>
                        <img width={18} src='./images/check.svg' />
                    </span>
                    <span className='f-s-14 f-w-300'>{text}</span>
                </div>
            </div>
        </div>
    )
}