import React from "react"


export default function Bubble() : JSX.Element {
   const bubble = Array(44).fill('bubble')


    return (
        <div className="background">
            <div className="bubbles">
                {
                    bubble
                    .map((bubble, i)=> {
                        return <div className="bubble" key={i}></div>
                    })
                }
            </div>  
        </div>
    )

}