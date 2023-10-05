'use client'
import styles from "./banner.module.css"
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Banner() {
    const [index , setIndex] = useState(0);
    const covers = ['/img/cover.png',"/img/cover2.png","/img/cover3.jpg"]
    const router = useRouter();

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1);}}>
            <Image src={covers[index%3]}
            alt="cover"
            fill={true}
            priority
            objectFit="cover"/> 
            <div className={styles.bannerText}>
                <h1 className="text-4xl font-medium">Honkai Start Rail</h1>
                <h2 className="text-xl">Explore Universal With Us</h2>
            </div>
            <button className="bg-white text-cyan-600 border border-cyan-600
                font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => {e.stopPropagation(); router.push("/car")}}>
                Select Your Travel Partner NOW
            </button>
        </div>
    );
}