'use client'
import Image from "next/image"
import { useState } from "react"
import styles from "@/styles/FontPage.module.css"
import { useRouter } from "next/navigation"

export default function Banner(){
    const banner = [
        "/img/banner1.jpg",
        "/img/banner2.jpg",
        "/img/banner3.jpg",
        "/img/banner4.jpg"
    ]

    const router = useRouter();
    const [index,setIndex] = useState(0);

    return (
        <div className="relative w-[100vw] h-[50vw] flex justify-center items-center">
            <Image src={banner[index]}
            className="opacity-40 "
            onClick={()=>{setIndex((index+1)%4);}}
            alt="banner"
            fill={true}
            priority
            objectFit="cover"/>


            <div className={`${styles.font} flex flex-row relative text-[50px] bg-black opacity-80 text-white 
            py-[10px] px-[30px] rounded-2xl`}>
                <div>
                    <h1 className="italic">You can book your free </h1>
                    <h1 className="ml-[130px]"><span className="italic">Vaccination</span>
                    <span className="bg-orange-600 ml-[20px] rounded-2xl font-bold 
                    duration-300 hover:scale-110 p-[8px]">Here</span></h1>
                </div>
                <Image className="w-[130px] ml-[20px]"
                src="/img/bannerText.png"
                alt="Error For Load Vaccine"
                width={100}
                height={100}/>
            </div>

            <div className="bottom-0 right-0">
                <button className={`${styles.font} text-white bg-cyan-600 border border-white
                font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                opacity-60 hover:opacity-100 text-[30px]`}
                onClick={(e) => {e.stopPropagation(); router.push("/hospital")}}>
                Booking Your Vaccine Now
                </button>
            </div>
        </div>
    )
}