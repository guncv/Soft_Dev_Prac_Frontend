import TopMenuItem from "./TopMenuItem"
import Image from "next/image"

export default function TopMenu(){
    return (
        <div className="flex justify-end fixed flex-row h-[100px] bg-black 
        top-0 right-0 left-0 z-30 opacity-80 items-center">
            <div className="mr-[40px] flex ">
                <TopMenuItem name="Home" refer="/"/>
                <TopMenuItem name="Booking" refer="/booking"/>
            </div>
            <Image className="w-[80px] h-[80px]"
            src="/img/logo.png"
            alt="logo"
            width={100}
            height={100}/>
        </div>
    )
}