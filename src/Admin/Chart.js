import React,  { useEffect, useState } from 'react'
import formatCurrency from '../utils/formatCurrency'
import formatDate from '../utils/formatDate'




export default function Chart({transaction, TotalTransactions}) {

    const [valueChart, setValueChart] = useState('')

    const [monthNum, setMonthNum] = useState('')
    useEffect(e=> {

        const monthNum = new Date().getMonth()        
        setMonthNum(monthNum)
    }, [])

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 
    function getMonthSelected(e) {
        for (let i = 0; i < month.length; i++) {
            if (e === month[i]) setMonthNum(i)
        }
    }



    const [total, setTotal] = useState(0) 
    function getTotal(info) {
        
            let t = []
            let aT = []
            for (const v in transaction) {

                let d = new Date(transaction[v].date.seconds * 1000).getMonth()
                if (transaction[v].type === 'Deposit') { 
                    if (d === monthNum) {
                        t.push(transaction[v].amount)
                    }

                    aT.push(transaction[v].amount)
                }
            }

            let total = t.reduce((partialSum, a) => partialSum + a, 0)

           


            if (info === 'transaction') return t.length
            if (info === 'total') return total
            if (info === 'greater') return  Math.max.apply(Math, t)
            if (info === 'Alltotal') return aT.reduce((partialSum, a) => partialSum + a, 0)
    }

    useEffect(e=> {
        setTotal(getTotal('total'))
    }, [])

    const SumOfTransction =  getTotal('transaction')


    const [ShowAllTotal, setShowAllTotal] = useState(null)
    function getAllTotal() {
            setTotal(getTotal('Alltotal'))
            setShowAllTotal(null)
    }
    function getTotalOfMonth() {
        setTotal(getTotal('total'))
        setShowAllTotal(true)
    }


    return (
        <>

            <div>
                <div className='chart-head'>
                    <div>
                        <span>Revenus</span>
                        {
                            TotalTransactions 
                            ? 
                            <small 
                                className='chart-head-title-span red' 
                                onClick={ShowAllTotal ? getAllTotal : getTotalOfMonth}
                            >
                                Total 
                            </small> 
                            : null
                        }
                    </div>
                    
                    <small style={{borderRadius: '2rem'}}>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 16C12.5913 16 14.1174 15.3679 15.2426 14.2426C16.3679 13.1174 17 11.5913 17 10C17 8.4087 16.3679 6.88258 15.2426 5.75736C14.1174 4.63214 12.5913 4 11 4C9.4087 4 7.88258 4.63214 6.75736 5.75736C5.63214 6.88258 5 8.4087 5 10C5 11.5913 5.63214 13.1174 6.75736 14.2426C7.88258 15.3679 9.4087 16 11 16V16ZM11.75 7C11.75 6.80109 11.671 6.61032 11.5303 6.46967C11.3897 6.32902 11.1989 6.25 11 6.25C10.8011 6.25 10.6103 6.32902 10.4697 6.46967C10.329 6.61032 10.25 6.80109 10.25 7V10C10.25 10.1989 10.3291 10.3896 10.4698 10.5302L12.5908 12.652C12.6604 12.7217 12.7432 12.777 12.8342 12.8147C12.9252 12.8524 13.0228 12.8718 13.1214 12.8718C13.2199 12.8718 13.3175 12.8524 13.4085 12.8147C13.4996 12.777 13.5823 12.7217 13.652 12.652C13.7217 12.5823 13.777 12.4996 13.8147 12.4085C13.8524 12.3175 13.8718 12.2199 13.8718 12.1214C13.8718 12.0228 13.8524 11.9252 13.8147 11.8342C13.777 11.7432 13.7217 11.6604 13.652 11.5908L11.75 9.6895V7Z" fill="white"/>
                            </svg>
                            <select onChange={e=> getMonthSelected(e.target.value)}>
                                {
                                    month.map(m=> 
                                        m === month[monthNum] ? <option key={m} selected>{month[monthNum]}</option> : <option key={m}>{m}</option>
                                    )
                                }
                            </select>
                        </span>
                    </small>


                </div>

                <div className='display'>
                    <h3 style={{margin: 0}}>
                        {
                            ShowAllTotal ? formatCurrency(getTotal('Alltotal'))
                            : valueChart ? formatCurrency(valueChart.amount) : formatCurrency(getTotal('total'))
                        }
                    </h3>
                    <small className='chart-head-title-span grey' style={{opacity: 0.4, fontSize: '12px'}}>
                        {
                            valueChart ?
                                SumOfTransction ?
                                    SumOfTransction > 1 ?
                                        SumOfTransction + ' transactions le ' + valueChart.date : null : 'transaction le ' + valueChart.date
                            : null
                        } 
                    </small>
                </div>
            </div>

            <div className='chart'>

                {
                    transaction
                    .filter(e=> new Date(e.date * 1000).getMonth() === monthNum)
                    .map(e=> 

                        <div  
                            key={e.id}
                            id={e.id}
                            onClick={x=> {
                                setValueChart({
                                    date: formatDate(e.date),
                                    amount: e.amount
                                })
                            }} 
                            onMouseOut={e=> {
                                setValueChart('')
                                e.target.classList.remove('onfocus')
                            }} 
                            className='chart-lign' 
                            style={{height: `${ e.amount / (getTotal('greater') + document.querySelector('.chart').clientHeight)  * 100 }px`}}>

                        </div>

                    ).reverse()
                } 
            </div>

        </>
    )
}
