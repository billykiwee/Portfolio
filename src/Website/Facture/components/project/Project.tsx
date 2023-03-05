import React from "react";
import { PROJECT_DATA } from "../../Facture";
import { ProjectName, ProjectNameState } from "../../interface/interface";


export class Project extends React.Component<ProjectName, ProjectNameState> {

    constructor(props: ProjectNameState) {
        super(props)

        this.state = {
            project : this.props.project
        }
    }

    render() {
        return (
            <>
                <div className='display'>
                    <span className='f-w-600'>Projet :</span>&nbsp;<input className="border-0" onChange={e=> this.setState({ project: e.target.value })} placeholder={PROJECT_DATA.projectName} />
                </div>

                <div>
                    <div className='display gap'>
                        <span>Facture en date du:</span>
                        <span >{new Date().toLocaleDateString().replaceAll('/', '-')}</span>
                    </div>
                    <div className='display gap justify-e' >
                        <span>Numéro:</span>
                        <span className='f-w-600'>{PROJECT_DATA.ID}</span>
                    </div>
                </div>
            </>
        )
    } 
}