'use client'
import styles from "./banner.module.css"
import Image from 'next/image'
import { useState } from 'react';

export default function Banner() {
    const covers = ['/img/cover.png',"/img/cover2.png","/img/cover3.jpg"]
    const [index , setIndex] = useState(0);

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
        </div>
    );
}