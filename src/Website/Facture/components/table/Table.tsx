import { useEffect, useState } from "react"
import formatCurrency from "../../../../App/components/formatCurrency"
import UniqueID from "../../../../App/components/uniqueID"
import { LignItem, TableProps } from "../../interface/interface"
import { TableLign } from "./Lign"

export function Table({ visible }: TableProps): JSX.Element {

    const [lign, setLign] = useState<LignItem[]>([])

    const lignInitial : LignItem[] = [{
        name    : 'Ligne ' + (lign.length+1),
        price   : '200,00€',
        qte     : 1,
        subTotal: 200,
        id      : UniqueID(4)
    }]

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
                                id={id}
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
                <div className='display'>
                    <button className='blue w-2 h-2 h-100p' onClick={addLign}>
                        <span className='f-w-600'>+</span>
                    </button>
                    <button className='red w-2 h-2 h-100p' onClick={removeLign}>
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