import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode,
    style   : string,
    ref     : React.LegacyRef<HTMLDivElement> 
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, style }, ref) => {
    return (
        <div className={'container ' + style ?? '' } ref={ref}>
            <div className='grid'>{children}</div>
        </div>
    )
})

export default Container