import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../App/components/Container'

export default function Game() {


    const [Input, setInput] = useState('Super')

    const alpha = [
        {leter : 'a', equal : '1-'},
        {leter : 'b', equal : '2-'},
        {leter : 'c', equal : '3-'},
        {leter : 'd', equal : '4-'},
        {leter : 'e', equal : '5-'},
        {leter : 'f', equal : '6-'},
        {leter : 'g', equal : '7-'},
        {leter : 'h', equal : '8-'},
        {leter : 'i', equal : '9-'},
        {leter : 'j', equal : '10-'},
        {leter : 'k', equal : '11-'},
        {leter : 'l', equal : '12-'},
        {leter : 'm', equal : '13-'},
        {leter : 'n', equal : '14-'},
        {leter : 'o', equal : '15-'},
        {leter : 'p', equal : '16-'},
        {leter : 'q', equal : '17-'},
        {leter : 'r', equal : '18-'},
        {leter : 's', equal : '19 -'},
        {leter : 't', equal : '20-'},
        {leter : 'u', equal : '21-'},
        {leter : 'v', equal : '22-'},
        {leter : 'w', equal : '23-'},
        {leter : 'x', equal : '24-'},
        {leter : 'y', equal : '25-'},
        {leter : 'z', equal : '26-'},
        {leter : ' ', equal : '__'}
    ]


    function getTranslaion() {

        let string = Input.toLowerCase().split('')
        let cryptWord = []



        alpha.map(a=> {
        
            for (const v in string) {
                if (string[v] === a.leter) {
                    cryptWord.push(a.equal)
                }
            }
        })

        return cryptWord
    }

    let crypt = getTranslaion()


    const [InputTranslate, setInputTranslate] = useState('')
    const [translated, setTranslated] = useState('')
    function translate() {

        let string = InputTranslate.toLowerCase().split('-')
        let translate = []

        alpha.map(a=> {
    
            for (const v in string) {
                console.log((string[v] + '-'));
                if ((string[v] + '-') === a.equal) {
                    translate.push(a.leter)
                }
            }
        })
        setTranslated(translate.toString().split(',').join(''))
    }

    console.log(translated);

    return (
        <Container>
            <div className='grid gap'>
                <input type='text' onChange={e=> setInput(e.target.value) }  className='div-input' />
                <span>{crypt}</span>

                <div className='display gap'>
                    <input type='text' onChange={e=> setInputTranslate(e.target.value) }  className='div-input w-100p' />
                    <div>
                        <button className='blue h-40' onClick={translate}>Traduire</button>
                    </div>
                    {
                        translated &&
                        <span>{translated}</span>
                    }
                </div>
            </div>
        </Container>
  )
}
