import Image from "next/image"

export default function Banner(){
    return (
        <div className="block relative w-[100vw] h-[50vw]">
            <Image src="/img/banner1.jpg"
            alt="banner"
            fill={true}
            priority
            objectFit="cover"/>
        </div>
    )
}