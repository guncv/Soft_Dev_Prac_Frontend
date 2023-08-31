import Image from "next/image"
import InteractiveCard from "./InteractiveCard";

interface Props {
    carName:string;
    imgSrc:string;
}

export default function ProductCard( {carName,imgSrc}:Props) {
    return (
        <InteractiveCard contentName={carName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Kafka"
                fill = {true}
                className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[30%] p-[10px]">{carName}</div>
        </InteractiveCard>
    )
}