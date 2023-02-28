import React from 'react'

export default function Container({children, style, ref}) {

    return (
        <div className={'container ' + style ?? '' } ref={ref}>
            <div className='grid'>{children}</div>
        </div>
    )

}