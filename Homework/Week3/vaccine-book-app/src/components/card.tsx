import Image from "next/image";
import styles from "@/components/card.module.css"

export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src="/img/card1.jpeg"
                alt="card1"
                fill={true}
                objectFit="cover"
            />
            </div>
            <div className={styles.cardText}>
                <h1>วัคซีน (Vaccine)
                    คือสารชนิดหนึ่งที่ฉีดเข้าไปร่างกาย 
                    เพื่อสร้างภูมิคุ้มกันโรคต่างๆ 
                </h1>
            </div>
        </div>
    )
}