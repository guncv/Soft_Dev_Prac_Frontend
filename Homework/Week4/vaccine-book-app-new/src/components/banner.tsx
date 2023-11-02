'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useSession } from "next-auth/react";

export default function Banner(){
    const covers = [
        "/img/vaccine.webp",
        "/img/background2.jpg",
        "/img/background3.jpg",
        "/img/background4.jpg",
    ];
    const [index,setIndex] = useState(0);
    const router = useRouter();
    const img = ["/img/vaccine.webp","/img/vaccine2.jpg","/img/vaccine3.webp","/img/vaccine4.webp"];
    const {data: session} = useSession();

    return (
        <div className="flex justify-center items-center relative w-screen h-screen"
        onClick={()=>{setIndex(index+1);}}>
            <Image src={img[index%4]}
            alt="vaccine banner" 
            fill={true}/>
            <div className="text-white block text-6xl relative justify-center items-center text-center">
                <p>บริการฉีดวัคซีนฟรี</p>
                <p>ฉีดวัคซีนป้องกันโรคร้ายอย่างดีและทั่วถึง</p>
            </div>
            <div>
                <button
                className="bg-cyan-600 text-white border-2 border-cyan-600 border-opacity-100
                hover:bg-white hover:text-cyan-600 hover:border-transparent
                font-semibold py-2 px-2 rounded-lg z-3 absolute bottom-2 right-2 mr-[10px] mb-[10px]
                transform transition-colors duration-300"
                onClick={(e) => {
                    e.stopPropagation();
                    router.push("/hospital");
                }}
                >
                Search more information for hospital
                </button>
                <div className="absolute mt-[30px] pt-[50px] right-0 pr-[25px] text-[20px]">
                {
                session ? <span className="text-white font-bold">Welcome {session.user?.name} !</span> : ''
                }
                </div>
            </div>
        </div>
    );
}