'use client'

interface Props {
    children:React.ReactNode;
}

export default function CardAction({children,} : Props){
    function onCardAction(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");
            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
        }
    }

    return (
        <div className="w-72 h-96 relative shadow-lg bg-white rounded-2xl mt-[20px]"
        onMouseOver={(e)=>onCardAction(e)}
        onMouseOut={(e)=>onCardAction(e)}>
            {children}
        </div>
    )
}

