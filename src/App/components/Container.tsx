import React, { ReactNode } from 'react'


export default function Container({ children, style }: { children?: React.ReactNode, style?: React.CSSProperties }) : JSX.Element {
    return (
        <div className='container' style={style} >
            <div className='grid'>{children}</div>
        </div>
    )
}