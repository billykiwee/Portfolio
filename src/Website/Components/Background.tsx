import React from "react"


export class Bubbles extends React.Component  {

    bubble = Array(44).fill('bubble')

    render () {
        return (
            <div className="background">
                <div className="bubbles">
                    {
                        this.bubble
                        .map((bubble, i)=> {
                            return <div className="bubble" key={i}></div>
                        })
                    }
                </div>  
            </div>
        )
    }
}