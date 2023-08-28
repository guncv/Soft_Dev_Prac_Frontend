import Image from "next/image";
import Link from "next/link";

export default function Booking(){
    return(
        <div className="flex justify-end fixed flex-row h-20 
        w-screen bg-white top-0 right-0 left-0 z-30">
            <Link href="/booking" className="relative my-auto w-auto h-full">
                <Image src="/img/book.png"
                    alt="Booking"
                    fill={true}/>
            </Link>
            <Image src="/img/logo.png"
                alt="Logo"
                fill={true}
                className="relative my-auto w-to h-full"/>
        </div>
    );
}