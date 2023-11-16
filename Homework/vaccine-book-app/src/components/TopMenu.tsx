import Link from "next/link"
import TopMenuItem from "./TopMenuItem"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import styles from "@/styles/FontPage.module.css"

export default async function TopMenu(){
    const session = await getServerSession(authOptions);

    return (
        <div className="flex fixed justify-end flex-row h-[100px] bg-black 
        top-0 right-0 left-0 z-30 opacity-80 items-center">
            <div className="w-full">
                <div className={`${styles.font} items-center ml-[10px] text-white text-[25px]`}>
                    {
                        session ? <Link href="/api/auth/signout">
                            Sign-Out of {session.user?.name}
                        </Link>
                        : <Link href="/api/auth/signin" >
                            Sign-In
                        </Link>
                    }
                </div>
            </div>
            <div className="mr-[10px] flex">
                <TopMenuItem name="MyBooking" refer="/mybooking"/>
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