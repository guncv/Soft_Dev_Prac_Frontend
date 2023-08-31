'use client'
import React from "react"

interface Props {
    children:React.ReactNode;
    contentName:string
}

export default function InteractiveCard( {children,contentName}:Props) {
    
    function onCardMouseAction(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
        }
    }

    function onCarSelected() {
        alert("You select " + contentName);
    }

    return (
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg"
        onClick={()=>onCarSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
           {children}
        </div>
    )
}