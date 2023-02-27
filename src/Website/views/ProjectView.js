import React, { useEffect, useState } from 'react'
import Container from '../../App/components/Container'
import formatCurrency from '../../App/components/formatCurrency'
import UniqueID from '../../App/components/uniqueID'
import { useStateValue } from '../reducer/StateProvider'


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


                <div className='m-t-4 display justify-s-b'>
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

    function getSum() {
        return document.querySelectorAll('price').forEach(p=> {
            return p
        })
    }

    const lignInitial = [
        {
            name: 'Fabrication',
            price: 0,
            qte: 0,
            subTotal: 0,
            id: UniqueID(8)
        },
    ]


    const [{ lign }, dispatch] = useStateValue('')

    useEffect(e=> {
        dispatch({
            type: 'set_Lign',
            lign: lignInitial
        })

        return () => lign
    }, [])

    function addLign() {
        return dispatch({
            type: 'set_Lign',
            lign: [
                ...lign,
                ...lignInitial ,
            ]
        })
    }

    function removeLign() {

        return dispatch({
            type: 'set_Lign',
            lign: lign.filter(e=> e.id !== lign[lign.length-1].id)
        })
    }



    const TOTAL = lign.length && lign.map(e=> e.subTotal).reduce((a,b)=> a+b)


   
    return (
        <div className='grid m-t-2'>
            <div className='f-w-600 display '>
                <div style={{ width: '50%' }} className='tb tb-top tb-left tb-bottom'>
                    <span contentEditable>Description</span>
                </div>
                <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-top tb-right tb-left tb-bottom'>
                    <span contentEditable>Taux jounalier</span>
                </div>
                <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span contentEditable>QTE</span>
                </div>
                <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span contentEditable>TOTAL</span>
                </div>
            </div>

            <div>
                {
                    lign
                    .map(l=> {

                        const { id ,name, price, qte, subTotal } = l

                        return (
                            <TableLign 
                                lign={lign}
                                id={id}
                                name={name}
                                price={price}
                                qte={qte} 
                                subTotal={subTotal} 
                            />
                        )
                    })
                }
            </div>

            <div className='display gap'>
                <button className='blue w-2 h-2' onClick={addLign}>
                    <span className='f-w-600'>+</span>
                </button>
                <button className='red w-2 h-2' onClick={removeLign}>
                    <span className='f-w-600'>-</span>
                </button>
            </div>


            <div className='display tb-bottom p-t-2'>
                <div style={{ width: '100%', textAlign: 'end' }} className='tb'>
                    <span className='f-w-600 f-s-18'>TOTAL TTC :</span>
                </div>
                <div style={{ width: '20%', textAlign: 'end' }} className='tb'>
                    <span className='f-w-600 f-s-18'>{formatCurrency(TOTAL)}</span>
                </div>
            </div>
        </div>
    )
}

function TableLign({ id, name, price, qte, subTotal }) {

    const [SUB, setSUB] = useState(subTotal)

    const [{ lign }, dispatch] = useStateValue('')

    
    function editLign(edit, value, id) {
        
        return dispatch({
            type: 'set_Lign',
            lign: [
                ...lign,
                lign
                .map(e=> {
                    if (e.id === id) {
                        return {
                            [edit]: value 
                        }
                    }
                }) 
            ]
        })
    }

    console.log(
        lign.filter(e=> e.id === id)
    )


    


    return (
        <div className='display ' id={id}>
            <div style={{ width: '50%' }} className='tb tb-left tb-bottom'>
                <span contentEditable>{name}</span>
            </div>
            <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-right tb-left tb-bottom'>
                <span contentEditable onInput={e=> editLign('price',e.target.innerHTML, id)} >{price}</span>
            </div>
            <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <span contentEditable onInput={e=> editLign('qte',e.target.innerHTML, id)} >{qte}</span>
            </div>
            <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <span className='subtotal'>{formatCurrency(SUB)}</span>
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