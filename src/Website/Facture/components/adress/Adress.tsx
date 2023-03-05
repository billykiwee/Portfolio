import React from "react";
import { AddressProps } from "../../interface/interface";



export class Adress extends React.Component<AddressProps> {

    constructor(props: AddressProps) {
        super(props);
    }

    render() {
        return (
            <div className='grid w-100p'  >
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
        )
    }
}
