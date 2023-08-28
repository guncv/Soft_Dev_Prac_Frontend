import Image from "next/image"

export default function(){
    return (
        <div className="fixed h-8 w-screen flex">
            <div>

            </div>
            <div>

            </div>
            <div>
                <Image src="/img/logo.png"
                alt="Logo Vaccine"
                fill={true}/>
            </div>
        </div>
    )
}