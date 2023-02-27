import React, { useEffect, useState } from 'react'
import Container from '../../App/components/Container'
import formatCurrency from '../../App/components/formatCurrency'
import UniqueID from '../../App/components/uniqueID'


export default function ProjectView() {

    return (
        <Container>

            <div className='grid'>
                <div className='display w-100p justify-s-b' style={{ width: '700px' }}>
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

                <Table />   
               

                <div className='display m-t-1'>
                    <BottomPage />
                </div>
            </div>
        </Container>
    )
}


function Table() {

    const [PRICE, setPRICE] = useState(10)
    const [QTE, setQTE] = useState(10)
    const [subTOTAL, setSubTOTAL] = useState(0)

    useEffect(e=> {
        setSubTOTAL(QTE * PRICE)
    }, [QTE, PRICE])


    function getSum() {
        return document.querySelectorAll('price').forEach(p=> {
            return p
        })
    }


    return (
        <div className='grid m-t-2'>
            <div className='f-w-600 display '>
                <div style={{ width: '50%' }} className='tb tb-top tb-left tb-bottom'>
                    <span contentEditable>Description</span>
                </div>
                <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-top tb-right tb-left tb-bottom'>
                    <span contentEditable>TAUX JOURNALIER</span>
                </div>
                <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span contentEditable>QTE</span>
                </div>
                <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span contentEditable>TOTAL</span>
                </div>
            </div>

            <div className='display '>
                <div style={{ width: '50%' }} className='tb tb-left tb-bottom'>
                    <span contentEditable>Fabrication portail</span>
                </div>
                <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-right tb-left tb-bottom'>
                    <input className='border-0 h-2 p-0'  onChange={e=> setPRICE(e.target.value)} value={PRICE} />
                </div>
                <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                    <input className='border-0 h-2 p-0' onChange={e=> setQTE(e.target.value)} value={QTE} />
                </div>
                <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                    <span className='subtotal'>{formatCurrency(subTOTAL)}</span>
                </div>
            </div>

            <div>
                <button className='blue w-2 h-2'>
                    <span>+</span>
                </button>
            </div>


            <div className='display tb-bottom p-t-2'>
                <div style={{ width: '100%', textAlign: 'end' }} className='tb'>
                    <span className='f-w-600 f-s-18'>TOTAL TTC :</span>
                </div>
                <div style={{ width: '20%', textAlign: 'end' }} className='tb'>
                    <span className='f-w-600 f-s-18'>2 500,00 €</span>
                </div>
            </div>
        </div>
    )
}

function Project({projet}) {
    return (
        <div className='display'>
            <span className='f-w-600'>Projet: </span>  <span>{projet}</span>
        </div>
    )
}


function Encode() {
    return (
        <div>
            <div className='display gap'>
                <span>Facture en date du:</span>
                <span contentEditable>{new Date().toLocaleDateString().replaceAll('/', '-')}</span>
            </div>
            <div className='display gap justify-e' >
                <span>Numéro:</span>
                <span className='f-w-600'>{UniqueID(4)}</span>
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


function BottomPage({  }) {
    return (
        <div className='display justify-c w-100p'>
            <div className='grid f-s-14' style={{ textAlign: 'center' }}>
                <span>TVA non applicable, art. 293 B du CGI.</span>
                <span>TJM - MR TURPIN PHILIPPE JASON</span>
                <span>Numéro de SIRET : 8892147800014</span>
                <span>Adresse : 34 b chemin des palmistes, Palmiste Rouge, CILAOS 97413</span>
                <span>3 Téléphone : 06 92 35 80 12</span>
            </div>
        </div>
    )
}