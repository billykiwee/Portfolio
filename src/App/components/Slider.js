import React, { useEffect, useState } from 'react'
import Dragabble from 'react-draggable'


export default function Slider({children, id}) {

    const [Slide, setSlide] = useState(0)

    const [WidthSlide, setWidthSlide] = useState({})

    function Slider() {
        document.querySelectorAll('#slide-slider-' + id).forEach(slide => {
            slide.parentElement.style = `margin-left: -${Slide * slide.offsetWidth}px` 

            setWidthSlide({div: slide, width : slide.offsetWidth})
        })
    }

    useEffect(e=> {
        Slider()
    }, [Slide])



    return (
        <div className='grid'>
            <div className='display transition align-top overflow-hidden' >
                {children}
            </div>
            <div className='display gap justify-e m-t-1'>
                <button 
                    onClick={e=> setSlide(Slide > 0 ? Slide - 1 : Slide)} 
                    className={(Slide === 0 ? 'opacity ' : '') + 'border w-3 h-3 border-r-100'} 
                >
                    <span className='display'>
                        <svg width="44" height="44" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 24L16 19L21 14" stroke="var(--black)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </button>
                <button 
                    onClick={e=> setSlide(Slide < children.length-1 ? Slide + 1 : children.length-1)} 
                    className={(Slide === children.length-1 ? 'opacity ' : '') + 'border w-3 h-3 border-r-100'} 
                >
                    <span className='display'>
                        <svg width="44" height="44" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 24L22 19L17 14" stroke="var(--black)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </button>
            </div>
        </div>
    )
}
