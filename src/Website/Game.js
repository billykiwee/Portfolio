import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../App/components/Container'
import Calendar from 'react-calendar'

export default function Game() {

        const currentDate = new Date()
        const months = [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre'
        ];
        const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
      
        const [month, setMonth] = useState(currentDate.getMonth())
        const [year, setYear] = useState(currentDate.getFullYear())

        function getAllDayOfMonth(month, year) {
            let days = []

            for (let i = 0; i < 32; i++) {
                if (new Date(`${month+1}/${i}/${year}`) > 0 || new Date(`${month+1}/${i}/${year}`) < 31) {
                    days.push(new Date(`${month+1}/${i}/${year}`).getDate())
                }
            }

            return Array.from(new Set([...days]))
        }

        function prevMonth() {
            setMonth(month - 1)
            if (month < 0) {
                setMonth(12)
                setYear(year-1)
            }
        }

        function nextMonth() {
            setMonth(month + 1)
            if (month > 11) {
                setMonth(1)
                setYear(year+1)
            }
        }

    return (
        <Container>
            <div className='grid gap-1rem p-2 border-r-2 shadow'>
                <div className='display justify-s-b'>
                    <button onClick={prevMonth}>prev</button>
                    <span className='display'>{months[month] ?? months[currentDate.getMonth()]}</span>
                    <span>{year}</span>
                    <button onClick={nextMonth}>next</button>
                </div>
                <div className='display gap'>
                    {
                        daysOfWeek.map(day=> {
                            return (
                                <div>{day}</div>
                            )
                        })
                    }
                </div>
                <div className='display wrap gap'>
                    {
                        getAllDayOfMonth(month, year).map(day=> {
                            return (
                                <div className='display justify-c w-3 h-3 border-r-100 border click hover'>{day}</div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
  )
}
