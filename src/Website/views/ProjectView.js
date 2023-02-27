import React, { useEffect, useState } from 'react'
import Container from '../../App/components/Container'
import formatCurrency from '../../App/components/formatCurrency'
import UniqueID from '../../App/components/uniqueID'
import { useStateValue } from '../reducer/StateProvider'


export default function ProjectView() {

    return (
        <Container>
            <div className='grid w-100p'>
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

    const lignInitial = [{
        name    : 'Fabrication',
        price   : 200,
        qte     : 1,
        subTotal: 200,
        id      : UniqueID(8)
    }]

    const [lign, setLign] = useState([])


    useEffect(e=> {
        setLign(lignInitial)
    }, [])

    function addLign() {
        return setLign([...lign, ...lignInitial])
    }

    function removeLign() {
        if (lign.length === 1) return 
        return setLign(lign.filter(e=> e.id !== lign[lign.length-1].id))
    }


    const [Total, setTotal] = useState(0)



   
    return (
        <div className='grid m-t-2'>
            <div className='f-w-600 display '>
                <div style={{ width: '50%' }} className='tb tb-top tb-left tb-bottom'>
                    <span >Description</span>
                </div>
                <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-top tb-right tb-left tb-bottom'>
                    <span >Taux jounalier</span>
                </div>
                <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span >QTE</span>
                </div>
                <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span >TOTAL</span>
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
                                setTotal={setTotal}
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
                    <span className='f-w-600 f-s-18'>{formatCurrency(Total)}</span>
                </div>
            </div>
        </div>
    )
}

function TableLign({ name, setTotal }) {

    const [subtotal, setSubtotal] = useState({
        price: 0,
        qte: 0
    })
    const getSum = subtotal.price * subtotal.qte
    
    useEffect(e=> {
        const getTotal = document.querySelectorAll('.subtotal')

        const subtotals = []

        getTotal.forEach(sub=> {
            subtotals.push(sub.id)
        })
        
        if (subtotals.length > 0) {
            setTotal(subtotals.map(e=> e*1).reduce((a,b)=> a+b))
        }
    })

       

    return (
        <div className='display ' >
            <div style={{ width: '50%' }} className='tb tb-left tb-bottom'>
                <span >{name}</span>
            </div>
            <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-right tb-left tb-bottom' >
                <input className='border-0 w-100p h-1' style={{ textAlign: 'end' }} onChange={e=> setSubtotal({ ...subtotal, price: e.target.value })} placeholder={subtotal.price} />
            </div>
            <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <input className='border-0 w-100p h-1' style={{ textAlign: 'end' }} onChange={e=> setSubtotal({  ...subtotal, qte: e.target.value })}placeholder={subtotal.qte} />
            </div>
            <div style={{ width: '15%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <span className='subtotal' id={getSum}>{formatCurrency(getSum)}</span>
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
                <span >{new Date().toLocaleDateString().replaceAll('/', '-')}</span>
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
                <span >{name}</span>
            }
            {
                adress &&
                <span >{adress}</span>   
            }
            {
                additionalAdress &&
                <span >{additionalAdress}</span>
            }
            <div>
                {
                    city &&
                    <span >{city.toUpperCase()}</span> 
                }
                {
                    zipCode &&
                    <span  className='m-l-04'>{zipCode}</span>
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



function Froms() {
    return (
        <div className='grid gap w-100p border p-1'>

            <div className='grid gap-04'>
                <label>Projet</label>
                <input placeholder='bonjour' />
            </div>
            <div className='grid gap-04'>
                <label>Projet</label>
                <input placeholder='bonjour' />
            </div>
            <div className='grid gap-04'>
                <label>Projet</label>
                <input placeholder='bonjour' />
            </div>
        </div>
    )
}