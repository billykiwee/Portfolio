import React from 'react'
import Container from '../../App/components/Container'

export default function ProjectView() {

    return (
        <Container>

            <div className='display w-100p justify-s-b' style={{ width: '800px' }}>
                <div className='grid w-100p'>
                    <span className='f-w-600'>TJM</span>
                    <Adress 
                        name='Turpin Jason'
                        adress='34 chemin des palmistes'
                        additionalAdress='Palmiste rouge'
                        city='Cilaos'
                        zipCode='97413'
                    />
                </div>

                <div style={{ textAlign: 'end' }} className=''>
                    <span className='f-w-600 f-s-25'>FACTURE</span>
                    <Adress 
                        name='Mr Martial'
                        adress='34 chemin des palmistes'
                        city='Cilaos'
                        zipCode='97413'
                    />
                </div>
            </div>
        </Container>
    )
}


function Adress({ name, adress, additionalAdress, city, zipCode  }) {

    return (
        <div className='grid w-100p m-t-1' >
            {
                name &&
                <span contentEditable>{name}</span>
            }
            {
                adress &&
                <span contentEditable>{adress}</span>   
            }
            {
                additionalAdress &&
                <span contentEditable>{additionalAdress}</span>
            }
            <div className='display gap'>
                {
                    city &&
                    <span contentEditable>{city.toUpperCase()}</span> 
                }
                {
                    zipCode &&
                    <span>{zipCode}</span>
                }
            </div>
        </div>
    )
}