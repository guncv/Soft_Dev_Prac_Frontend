import Link from "next/link"
import TopMenuItem from "./TopMenuItem"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import styles from "@/styles/FontPage.module.css"

export default async function TopMenu(){
    const session = await getServerSession(authOptions);

    return (
        <div className="flex justify-start fixed flex-row h-[100px] bg-black 
        top-0 right-0 left-0 z-30 opacity-80 items-center">
            <div className={`${styles.font} w-full text-white text-[25px]
            ml-[20px]`}>
                {
                    session ? <Link href="/api/auth/signout">
                        Sign-Out of {session.user?.name}
                    </Link>
                    : <Link href="/api/auth/signin" >
                        Sign-In
                    </Link>
                }
            </div>
            <div className="mr-[40px] flex">
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