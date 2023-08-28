import Image from "next/image";
import styles from "@/components/card.module.css"

interface Props {
    name:string;
    picture:string;
}
"w-96 h-96 bg-white my-5 py-5 shadow-2xl rounded-xl"
export default function Card({name,picture} : Props){
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src={picture}
                alt="card1"
                fill={true}
                objectFit="cover"
            />
            </div>
            <div className={styles.cardText}>
                <h1>{name}</h1>
            </div>
        </div>
    )
}