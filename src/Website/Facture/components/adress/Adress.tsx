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
                <div className="grid">
                    {
                        this.props.name &&
                        <span contentEditable>{this.props.name}</span>
                    }
                    {
                        this.props.adress &&
                        <span contentEditable>{this.props.adress}</span>   
                    }
                    {
                        this.props.additionalAdress &&
                        <span contentEditable>{this.props.additionalAdress}</span>
                    }
                    <div>
                        {
                            this.props.city &&
                            <span contentEditable>{this.props.city.toUpperCase()}</span> 
                        }
                        {
                            this.props.zipCode &&
                            <span contentEditable className='m-l-04'>{this.props.zipCode}</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
