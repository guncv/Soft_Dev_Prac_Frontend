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
            event.currentTarget.classList.remove("mt-[20px]");
            event.currentTarget.classList.add("mt-[50px]");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
            event.currentTarget.classList.remove("mt-[50px]");
            event.currentTarget.classList.add("mt-[20px]");
        }
    }

    return (
        <div className="w-72 h-96 relative shadow-lg shadow-zinc-100 bg-white 
        rounded-2xl mt-[20px] mb-[100px] hover:scale-[1.05] duration-300"
        onMouseOver={(e)=>onCardAction(e)}
        onMouseOut={(e)=>onCardAction(e)}>
            {children}
        </div>
    )
}