'use client'
import Image from "next/image";
import { useState } from "react"

export default function Banner(){
    const [index,setIndex] = useState(0);
    const img = ["/img/vaccine.webp","/img/vaccine2.jpg","/img/vaccine3.webp","/img/vaccine4.webp"]
    
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
        </div>
    );
}