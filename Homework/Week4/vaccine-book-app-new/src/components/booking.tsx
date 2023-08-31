import Image from "next/image";
import Link from "next/link";

export default function Booking(){
    return(
        <div className="flex justify-end fixed flex-row h-20 
        bg-amber-300 top-0 right-0 left-0 z-30">
            <Link href="/booking">
                <Image src="/img/book.png"
                    alt="Booking"
                    width={100}
                    height={300} 
                    className="mr-5 h-full w-32"/>
            </Link>
            <Image src="/img/logo.png"
                alt="Logo"
                width={100}
                height={10}
                className="relative my-auto"/> 
        </div>
    );
}