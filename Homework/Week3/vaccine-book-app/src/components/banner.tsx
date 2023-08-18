import Image from "next/image";
import styles from "@/components/banner.module.css"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src="/img/vaccine.jpg"
            alt="banner"
            fill={true}
            priority
            objectFit="cover"
            />
            <div className={styles.bannerText}>
                <h1>ฉีดวัคซีนป้องกันโรคร้าย</h1>
            </div>
        </div>
    )
}