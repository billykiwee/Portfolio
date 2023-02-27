import React from 'react'
import Container from '../../App/components/Container'
import UniqueID from '../../App/components/uniqueID'

export default function ProjectView() {

    return (
        <Container>

            <div className='grid gap-2rem'>
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

                    <div style={{ textAlign: 'end' }} className='w-100p'>
                        <span className='f-w-600 f-s-25'>FACTURE</span>
                        <Adress 
                            name='Mr Martial'
                            adress='34 chemin des palmistes'
                            city='Cilaos'
                            zipCode='97413'
                        />
                    </div>

                </div>

                <div className='m-t-2 display justify-s-b'>
                    <Project projet='Fabrication' />
                    <Encode />
                </div>

                <div className='f-w-600'>
                    <span contentEditable>{'Description'.toUpperCase()}</span>
                    <span contentEditable>{'Taux journalier'.toUpperCase()}</span>
                    <span contentEditable>{'QTE'.toUpperCase()}</span>
                    <span contentEditable>{'TOTAL'.toUpperCase()}</span>
                </div>
            </div>
        </Container>
    )
}

function Project({projet}) {
    return (
        <div className='display'>
            <span className='f-w-600'>Projet: </span>  <span>{projet}</span>
        </div>
    )
}


function Encode({}) {
    return (
        <div>
            <div className='display gap'>
                <span>Facture en date du:</span>
                <span contentEditable>{new Date().toLocaleDateString().replaceAll('/', '-')}</span>
            </div>
            <div className='display gap' >
                <span>Numéro:</span>
                <span className='f-w-600'>{UniqueID(8)}</span>
            </div>
        </div>
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
            <div>
                {
                    city &&
                    <span contentEditable>{city.toUpperCase()}</span> 
                }
                {
                    zipCode &&
                    <span contentEditable className='m-l-04'>{zipCode}</span>
                }
            </div>
        </div>
    )
}