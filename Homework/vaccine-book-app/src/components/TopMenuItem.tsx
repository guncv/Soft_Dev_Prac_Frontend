import Link from "next/link"
import styles from "@/styles/FontPage.module.css"

interface Props {
    name:string
    refer:string
}

export default function TopMenuItem({name,refer}:Props){
    return (
        <div className={`${styles.font} text-white text-[25px] opacity-100 
        hover:scale-[1.20] duration-300 mr-[60px]`}>
            <Link href={refer}>{name}</Link>
        </div>  
    )
}