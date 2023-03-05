import React from "react";
import { ID } from "../../Facture";
import { ProjectName } from "../../interface/interface";

export class Project extends React.Component<ProjectName> {
    
    render() {
        return (
            <>
                <div className='display'>
                    <span className='f-w-600'>Projet :</span><span>&nbsp;{this.props.projet}</span> 
                </div>

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
            </>
        )
    } 
}