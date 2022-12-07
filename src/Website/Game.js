import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../App/components/Container'

export default function Game() {


    const bubbles = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const colors = ['black', 'red', 'yellow', 'blue', 'green']

    function getRandomColor() {
        let randomColor = Math.floor(Math.random() * colors.length)
        return colors[randomColor]
    }
    let randomColor = getRandomColor()

    function getRandomBubble() {
        let randomBubble = Math.floor(Math.random() * bubbles.length)
        return randomBubble
    }
    let randomBubble = getRandomBubble()



    const [popupText, setpopupText] = useState('')


    function nextStep() {
        getRandomColor()
        getRandomBubble()
    }

  return (
    <Container>
        <div>
            <span>BubbleGame</span>
        </div>

        <Popup text={popupText} step={nextStep} />

        <div className='display shadow border-r-2 p-2' style={{width: '333px', height: '333px'}}>
            <div className='display wrap gap-1rem'>
                {
                    bubbles.map((bubble, i)=> {
                        return <div className='display h-4 w-4 border-r-100 bubble click' id={'bubble-' + i} style={{background: randomColor}}></div>
                    })
                }
            </div>
        </div>
    </Container>
  )
}


function Popup({text, step}) {
    if (text) 
    return (
        <div className='display'>
            <div className='border border-r-1 p-1'>
                <div className='grid gap-1rem'>
                    <div className='display justify-c'>
                        <span className='f-s-2rem'>{text}</span>
                    </div>
                    <button className='blue h-3 p-lr-2' onClick={step}>
                        <span className='f-s-16'>Continuer</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
