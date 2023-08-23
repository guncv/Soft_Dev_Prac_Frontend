import Image from "next/image";
import styles from "@/components/banner.module.css"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src="/img/vaccine.webp"
            alt="banner"
            fill={true}
            priority
            objectFit="cover"
            />
            <div className={styles.bannerText}>
                <h1>บริการฉีดวัคซีนฟรี</h1>
                <h2>ฉีดวัคซีนป้องกันโรคร้ายอย่างดีและทั่วถึว</h2>
            </div>
        </div>
    )
}