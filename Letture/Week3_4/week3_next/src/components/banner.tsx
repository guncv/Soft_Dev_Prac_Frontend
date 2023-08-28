import styles from "./banner.module.css"
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={"/img/cover.png"}
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