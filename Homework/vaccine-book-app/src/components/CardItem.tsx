import Image from "next/image"
import styles from "./CardItem.module.css"
import CardAction from "./CardAction"

interface Props{
    picture:string
    name:string
}

export default function CardItem({picture,name}:Props){
    return (
        <CardAction>
            <div className="w-[100%] h-[60%] relative">
                <Image className="rounded-t-xl"
                src={picture}
                alt={name}
                fill={true}/>
            </div>
            <div className={`${styles.font} flex justify-center mt-[10px] text-[18px] w-[100%] h-[20%] font-bold`}>
                {name}
            </div>
        </CardAction>
    )
}