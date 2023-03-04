import React, { Component, useEffect, useRef, useState } from 'react'
import formatCurrency from '../../App/components/formatCurrency'
import UniqueID from '../../App/components/uniqueID'
import jsPDF from 'jspdf';



interface jsPDFOptions {
    format          : string,
    unit            : any,
    orientation     : any,
    putOnlyUsedFonts: boolean,
    zoom            : number
}


export default function ProjectView(): JSX.Element {

    const ID = UniqueID(8)

    const [visible, setvisible] = useState<boolean>(true)

    const reportTemplateRef = useRef<HTMLDivElement>(null)

	const handleGeneratePdf = () => {

        const options : jsPDFOptions = {
            format: 'a4',
            unit  : 'pt',
            orientation: 'p',
            putOnlyUsedFonts:true,
            zoom: 1.5
        }
        
        const doc = new jsPDF(options)
        setvisible(false)

        if (reportTemplateRef.current) {
            doc.html(reportTemplateRef.current, {
                async callback(doc) {
                    await doc.save('Facture n° ' + ID)
                    setvisible(true)
                }
            })
        }
	}



    




    return (

        <div className='display gap  p-2 h-100p' style={{ width: 'calc(100vh, 500px)', alignItems: 'baseline' }} ref={reportTemplateRef} >
            <div className='grid m-2' >
                <div className='display w-100p justify-s-b'>
                    <div className='grid w-100p'>
                        <span className='f-w-600'>
                           <img src='./images/tjm.png' height={44} /> 
                        </span>
                        <Adress 
                            name='Turpin Jason'
                            adress='34 chemin des palmistes'
                            additionalAdress='Palmiste rouge'
                            city='Cilaos'
                            zipCode={97413}
                        />
                    </div>

                    <div style={{ textAlign: 'end' }} className='w-100p'>
                        <span className='f-w-600 f-s-20'>FACTURE</span>
                        <Adress 
                            name='Mr Martial'
                            adress='34 chemin des palmistes'
                            city='Cilaos'
                            additionalAdress=''
                            zipCode={97413}
                        />
                    </div>
                </div>


                <div className='m-t-4 display justify-s-b align-top'>
                    <Project projet='Fabrication' />
                    <Encode ID={ID} />
                </div>

                <Table visible={visible} />   
            

                <div className='display m-t-1' style={{ bottom: 0 }}>
                    <BottomPage />
                </div>
            </div>
            {
                visible&&
                <div className='display justify-c fixed p-1' style={{ bottom : 0 }}>
                    <div className='display'>
                        <button className='blue p-1' onClick={handleGeneratePdf}>
                            <span className='f-s-20'>Télécharger en PDF</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}


interface TableProps {
    visible : boolean
} 


interface LignItem {
    name    : string;
    price   : number;
    qte     : number;
    subTotal: number;
    id      : string;
}


function Table({ visible }: TableProps): JSX.Element {

    const lignInitial : LignItem[] = [{
        name    : 'Fabrication',
        price   : 200,
        qte     : 1,
        subTotal: 200,
        id      : UniqueID(8)
    }]

    const [lign, setLign] = useState<LignItem[]>([])


    useEffect(()=> {
        setLign(lignInitial)
    }, [])

    function addLign() {
        return setLign([...lign, ...lignInitial])
    }

    function removeLign() {
        if (lign.length === 1) return 
        return setLign(
            lign
            .filter(e=> e.id !== lign[lign.length-1].id)
        )
    }


    const [Total, setTotal] = useState<number>(0)


   
    return (
        <div className='grid m-t-2'>
            <div className='f-w-600 display '>
                <div style={{ width: '40%' }} className='tb tb-top tb-left tb-bottom'>
                    <span >Description</span>
                </div>
                <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-top tb-right tb-left tb-bottom'>
                    <span >Taux jounalier</span>
                </div>
                <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span >QTE</span>
                </div>
                <div style={{ width: '20%', textAlign: 'end' }} className='tb tb-top tb-right tb-bottom'>
                    <span >TOTAL</span>
                </div>
            </div>

            <div>
                {
                    lign
                    .map(l=> {

                        const { id ,name, price, qte } = l

                        return (
                            <TableLign 
                                name={name}
                                price={price}
                                qte={qte}
                                setTotal={setTotal}
                            />
                        )
                    })
                }
            </div>
            
            {
                visible &&
                <div className='display gap'>
                    <button className='blue w-2 h-100p' onClick={addLign}>
                        <span className='f-w-600'>+</span>
                    </button>
                    <button className='red w-2 h-100p' onClick={removeLign}>
                        <span className='f-w-600'>-</span>
                    </button>
                </div>
            }


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


interface TableLignProps {
    name: string,
    price: number,
    qte: number,
    setTotal: any,
}

interface subTotalOptions {
    price: any,
    qte: any
}
function TableLign({ name, price, qte, setTotal }: TableLignProps) {

    const [subtotal, setSubtotal] = useState<subTotalOptions>({
        price: '',
        qte  : ''
    })
    const getSum = subtotal.price * subtotal.qte
    
    useEffect(()=> {
        const getTotal = document.querySelectorAll('.subtotal')

        const subtotals : any[] = []

        getTotal.forEach(sub => {
            subtotals.push(sub.id)
        })
        
        if (subtotals.length > 0) {
            setTotal(subtotals.map(e=> e*1).reduce((a,b)=> a+b))
        }
    })

       

    return (
        <div className='display ' >
            <div style={{ width: '40%' }} className='tb tb-left tb-bottom'>
                <input className='border-0 w-100p h-100p' placeholder={name} />
            </div>
            <div style={{ width: '25%', textAlign: 'end' }} className='tb tb-right tb-left tb-bottom' >
                <input className='border-0 w-100p h-100p' style={{ textAlign: 'end' }} onChange={e=> setSubtotal({ ...subtotal, price: e.target.value })} placeholder={price.toString()} />
            </div>
            <div style={{ width: '10%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <input className='border-0 w-100p h-100p' style={{ textAlign: 'end' }} onChange={e=> setSubtotal({  ...subtotal, qte: e.target.value })}placeholder={qte.toString()} />
            </div>
            <div style={{ width: '20%', textAlign: 'end' }} className='tb tb-right tb-bottom'>
                <span className='subtotal' id={getSum.toString()}>{formatCurrency(getSum)}</span>
            </div>
        </div>
    )
}


interface projectProps {
    projet : string
}

function Project({projet}: projectProps) {
    return (
        <div className='display'>
            <span className='f-w-600'>Projet :</span><span>&nbsp;{projet}</span>
        </div>
    )
}

interface EnocdeProps {
    ID: string
}

function Encode({ ID }: EnocdeProps): JSX.Element {
    return (
        <div>
            <div className='display gap'>
                <span>Facture en date du:</span>
                <span >{new Date().toLocaleDateString().replaceAll('/', '-')}</span>
            </div>
            <div className='display gap justify-e' >
                <span>Numéro:</span>
                <span className='f-w-600'>{ID}</span>
            </div>
        </div>
    )
}





interface AdressProps {
    name: string, 
    adress: string, 
    additionalAdress?: string, 
    city: string, 
    zipCode: number
}

type AddressState = AdressProps

class Adress extends React.Component<AdressProps, AddressState> {
    
    constructor(props: AdressProps) {
        super(props)
        this.state = {
            name: props.name,
            address: props.address,
            additionalAddress: props.additionalAddress,
            city: props.city,
            zipCode: props.zipCode,
          };
    }

    render() {
        return (
            <div className='grid w-100p'  >
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
}




function BottomPage() {
    return (
        <div className='display justify-c w-100p'>
            <div className='grid' style={{ textAlign: 'center', fontSize: '12px' }} >
                <span>TVA non applicable, art. 293 B du CGI.</span>
                <span>TJM - MR TURPIN PHILIPPE JASON</span>
                <span>Numéro de SIRET : 8892147800014</span>
                <span>Adresse : 34 b chemin des palmistes, Palmiste Rouge, CILAOS 97413</span>
                <span>Téléphone : 06 92 35 80 12</span>
            </div>
        </div>
    )
}



function Froms(): JSX.Element {
    
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