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
        
        window.onclick = (e: Event) => {

            if (this.state.editAdress) {

               /*  const editAddressBlock = document.querySelector<HTMLDivElement>('#edit-adress-block');
                if (editAddressBlock && !editAddressBlock.closest(e.target as Element)) {
                    this.setState({ editAdress: !this.state.editAdress });
                } */
                console.log(e.target);
                
            }
        }
        
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
                    <div className="grid gap-1rem absolute shadow white p-1 zi-2 w-100p" id='edit-adress-block'>
                        <div className="grid gap">
                            {
                                this.props.name &&
                                <div>
                                    <label>Nom</label>
                                    <input className="w-100p" placeholder={this.props.name} />
                                </div>
                            }
                            {
                                this.props.adress &&
                                <div>
                                    <label>Adress</label>
                                    <input className="w-100p" placeholder={this.props.adress} />
                                </div>
                            }
                            {
                                this.props.additionalAdress &&
                                <div>
                                    <label>additionalAdress</label>
                                    <input className="w-100p" placeholder={this.props.additionalAdress} />
                                </div>
                            }
                            <div className="grid gap">
                                {
                                    this.props.city &&
                                    <input className="w-100p" placeholder={this.props.city} />
                                }
                                {
                                    this.props.zipCode &&
                                    <input className="w-100p" placeholder={this.props.zipCode.toString()} />
                                }
                            </div>
                        </div>
                        <button className="blue h-3">
                            <span>Valider</span>
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
