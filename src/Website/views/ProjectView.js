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

                <div className='grid'>
                    <div className='m-t-2 f-w-600 display '>
                        <div style={{ width: '50%' }} className='tb tb-top tb-left tb-bottom'>
                            <span contentEditable>Description</span>
                        </div>
                        <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-top tb-right tb-left tb-bottom'>
                            <span contentEditable>TAUX JOURNALIER</span>
                        </div>
                        <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                            <span contentEditable>QTE</span>
                        </div>
                        <div style={{ width: '30%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                            <span contentEditable>TOTAL</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            slef
                        </div>
                    </div>
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