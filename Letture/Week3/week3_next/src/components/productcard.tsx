import styles from "./productcard.module.css"
import Image from "next/image"

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/kafka.jpg'}
                alt="Kafka"
                fill = {true}
                objectFit="cover"
                />
            </div>
            <div className={styles.cardtext}>I LOVE KAFKA</div>
        </div>
    )
}