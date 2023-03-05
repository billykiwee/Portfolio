import React from 'react'
import UniqueID from '../../App/components/uniqueID'
import jsPDF, { jsPDFOptions } from 'jspdf';
import { FactureState, ProjectProps } from './interface/interface';
import { Table } from './components/table/Table';
import { Project } from './components/project/Project';
import { Adress } from './components/adress/Adress';
import { BottomPage } from './components/bottom/Bottom';



export const PROJECT_DATA : ProjectProps = {
    ID : UniqueID(5),
    projectName: 'Fabrication cheminée',
    date: new Date()
}

export class Facture extends React.Component<ProjectProps, FactureState> {

    constructor(props: ProjectProps) {
        super(props)
    
        this.state = {
            editablesVisible: true
        }
    }

    containerRef = React.createRef<HTMLDivElement>()


    handleGeneratePdf = async() => {
        if (this.containerRef.current) {

            const options : jsPDFOptions = { 
                format: [this.containerRef.current.clientWidth, 800],
                orientation: "portrait", // Orientation du document (portrait ou paysage)
                unit: "pt", // Unité de mesure utilisée
                compress: true, // Compression du document (true ou false)
            }
            
            const doc = new jsPDF(options)

            this.setState({ editablesVisible: false })

            doc.html(this.containerRef.current, {
                callback: () => {
                    doc.save(`Facture n° ${PROJECT_DATA.ID}`)
                    this.setState({ editablesVisible: true })
                }
            })
        }
	}

    render() {
        return (

            <div className='display gap  p-2 h-100p' style={{ width: '600px', alignItems: 'baseline' }} ref={this.containerRef} >
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

