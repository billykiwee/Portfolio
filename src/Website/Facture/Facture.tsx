import React, { Component, CSSProperties, useEffect, useRef, useState } from 'react'
import formatCurrency from '../../App/components/formatCurrency'
import UniqueID from '../../App/components/uniqueID'
import jsPDF, { jsPDFOptions } from 'jspdf';
import { AddressProps, FactureState, ProjectName, ProjectProps, Sum, TableLignProps, TableLignState } from './interface/interface';
import { Table } from './components/table/Table';
import { Project } from './components/project/Project';
import { Adress } from './components/adress/Adress';
import { BottomPage } from './components/bottom/Bottom';



export const ID = UniqueID(5)


export class Facture extends React.Component<ProjectProps, FactureState> {

    constructor(props: ProjectProps) {
        super(props)
    
        this.state = {
            editablesVisible: true
        }
    }

    containerRef = React.createRef<HTMLDivElement>()


    handleGeneratePdf = async() => {

        const options : jsPDFOptions = {
            format: "a4",
            unit: "px"
        }
        
        const doc = new jsPDF(options)
        doc.setFont("Poppins", "normal");

        this.setState({ editablesVisible: false })

        if (this.containerRef.current) {
            doc.html(this.containerRef.current, {
                callback: () => {
                    doc.save(`Facture n° ${ID}`)
                    this.setState({ editablesVisible: true })
                }
            })
        }
	}

    render() {
        return (

            <div className='display gap  p-2 h-100p' style={{ width: 'calc(500px)', alignItems: 'baseline' }} ref={this.containerRef} >
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
                    </div>
    
                    <Table visible={this.state.editablesVisible} />   
                
    
                    <div className='display m-t-1' style={{ bottom: 0 }}>
                        <BottomPage />
                    </div>
                </div>
                {
                    this.state.editablesVisible &&
                    <div className='display justify-c fixed p-1' style={{ bottom : 0 }}>
                        <div className='display'>
                            <button className='blue p-1' onClick={this.handleGeneratePdf}>
                                <span className='f-s-20'>Télécharger en PDF</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

