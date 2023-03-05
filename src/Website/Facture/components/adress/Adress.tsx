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
                    <input className="border-0" style={{ textAlign: 'end', height: '24px' }} placeholder={this.props.name} />
                }
                {
                    this.props.adress &&
                    <input className="border-0" style={{ textAlign: 'end', height: '24px' }} placeholder={this.props.adress} />
                }
                {
                    this.props.additionalAdress &&
                    <input className="border-0" style={{ textAlign: 'end', height: '24px' }} placeholder={this.props.additionalAdress} />
                }
                <div>
                    {
                        this.props.city &&
                        <input className="border-0" style={{ textAlign: 'end', height: '24px' }} placeholder={this.props.city.toUpperCase()} />
                    }
                    {
                        this.props.zipCode &&
                        <input className="border-0" style={{ textAlign: 'end', height: '24px' }} placeholder={this.props.zipCode.toString()} />
                    }
                </div>
            </div>
        )
    }
}
