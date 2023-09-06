import Image from "next/image";

export default function Banner(){
    return (
        <div className="flex justify-center items-center relative w-screen h-screen">
            <Image src="/img/vaccine.webp"
            alt="vaccine banner"
            fill={true}/>
            <div className="text-white block text-6xl relative justify-center items-center text-center">
                <p>บริการฉีดวัคซีนฟรี</p>
                <p>ฉีดวัคซีนป้องกันโรคร้ายอย่างดีและทั่วถึง</p>
            </div>
        </div>
    );
}