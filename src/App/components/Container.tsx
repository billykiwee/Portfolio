import React, { ReactNode } from 'react'


export default function Container(children: ReactNode, style: string) {
    return (
        <div className={'container ' + style ?? '' } >
            <div className='grid'>{children}</div>
        </div>
    )
}