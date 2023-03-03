import React from 'react'

interface ContainerProps {
    children: any,
    style   : string,
    ref     : React.LegacyRef<HTMLDivElement> 
}

export default function Container({children, style, ref} : ContainerProps) : JSX.Element {
    return (
        <div className={'container ' + style ?? '' } ref={ref}>
            <div className='grid'>{children}</div>
        </div>
    )

}