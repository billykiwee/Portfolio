import React from "react";
import { AddressProps } from "../../interface/interface";


interface EditAdressState {
    editAdress : boolean
}


export class Adress extends React.Component<AddressProps, EditAdressState> {

    constructor(props: AddressProps) {
        super(props);

        this.state = {
            editAdress : false
        }
    }

    render() {

        
        return (
            <div className='grid w-100p'  >
                {
                    !this.state.editAdress 
                    ?
                    <div className="grid">
                        {
                            this.props.name &&
                            <span >{this.props.name}</span>
                        }
                        {
                            this.props.adress &&
                            <span >{this.props.adress}</span>   
                        }
                        {
                            this.props.additionalAdress &&
                            <span >{this.props.additionalAdress}</span>
                        }
                        <div>
                            {
                                this.props.city &&
                                <span >{this.props.city.toUpperCase()}</span> 
                            }
                            {
                                this.props.zipCode &&
                                <span  className='m-l-04'>{this.props.zipCode}</span>
                            }
                        </div>
                    </div>
                    : 
                    <div className="grid gap-1rem absolute shadow white p-2 zi-2 w-100p border-r-1" id='edit-adress-block'>
                        <div className="grid gap">
                            {
                                this.props.name &&
                                <div style={{ textAlign: 'start' }}>
                                    <label>Nom</label>
                                    <input className="w-100p" placeholder={this.props.name} />
                                </div>
                            }
                            {
                                this.props.adress &&
                                <div style={{ textAlign: 'start' }}>
                                    <label>Adress</label>
                                    <input className="w-100p" placeholder={this.props.adress} />
                                </div>
                            }
                            {
                                this.props.additionalAdress &&
                                <div style={{ textAlign: 'start' }}>
                                    <label>additionalAdress</label>
                                    <input className="w-100p" placeholder={this.props.additionalAdress} />
                                </div>
                            }
                            <div className="grid gap">
                                {
                                    this.props.city &&
                                    this.props.additionalAdress &&
                                    <div style={{ textAlign: 'start' }}>
                                        <label>Ville</label>
                                        <input className="w-100p" placeholder={this.props.city} />
                                    </div>
                                }
                                {
                                    this.props.zipCode &&
                                    <div style={{ textAlign: 'start' }}>
                                        <label>Code Postal</label>
                                        <input className="w-100p" placeholder={this.props.zipCode.toString()} />
                                    </div>
                                }
                            </div>
                        </div>
                        <button className="blue h-3">
                            <span className="f-s-18">Valider</span>
                        </button>
                    </div>
                }
                
                {
                    this.props.clientAdress &&
                    <div className="display justify-e">
                        <div className="display">
                            <button className="red" onClick={e=> this.setState({ editAdress: !this.state.editAdress })} >
                                <span>Modifier</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
