import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../App/components/Container'

export default function Game() {


    const bubbles = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const colors = ['black', 'red', 'yellow', 'blue', 'green', 'pink', 'blow']

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

    useEffect(e=> {
        document.querySelector('#bubble-' + randomBubble).style.opacity = 0.4
    }, [])


  return (
    <Container>
        <div>
            <span>BubbleGame</span>
        </div>

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
