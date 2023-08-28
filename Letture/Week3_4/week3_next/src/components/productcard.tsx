import styles from "./productcard.module.css"
import Image from "next/image"

interface Props {
    carName:string;
    imgSrc:string;
}

export default function ProductCard( {carName,imgSrc}:Props) {
    return (
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Kafka"
                fill = {true}
                className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[30%] p-[10px]">{carName}</div>
        </div>
    )
}