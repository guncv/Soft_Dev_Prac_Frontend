import Image from "next/image";
import Link from "next/link";
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Booking(){
    const session = await getServerSession(authOptions);

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
                <div className='fixed top-0 z-[12] pt-5 w-full font-bold pl-2'>
                    {
                        session ? <Link href="/api/auth/signout">
                            <div className="flex items-center absolute h-full  text-[40px] rounded-md text-cyan-500 hover:text-cyan-700">
                                Sign-Out of {session.user?.name}
                            </div>
                            </Link>
                            : <Link href="/api/auth/signin" >
                                <div className="flex items-center mt-[10px] absolute h-full  text-[40px] rounded-md text-cyan-500 hover:text-cyan-800">
                                    Sign in
                                </div>
                            </Link>
                    }
                </div>    
            </div>
    );
}