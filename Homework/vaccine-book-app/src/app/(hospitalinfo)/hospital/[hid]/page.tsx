import Image from "next/image";
import styles from "@/styles/FontPage.module.css"

interface Props {
    params:{hid:string}
}

export default function HospitalInformation({params}:Props){
    const hospitalInfo = new Map()
    hospitalInfo.set("001",{picture:"/img/chula.jpg",name:"Chulalongkorn Hospital"});
    hospitalInfo.set("002",{picture:"/img/rajavithi.jpg",name:"Rajavithi Hospital"});
    hospitalInfo.set("003",{picture:"/img/thammasat.jpg",name:"Thammasat University Hospital"});

    return (
        <div className="flex flex-row ml-[5%] mt-[120px]">
            <Image className="w-1/3"
            src={hospitalInfo.get(params.hid).picture}
            alt={hospitalInfo.get(params.hid).name}
            width={2000} height={2000}/>
            <div className={`${styles.font} text-white text-[40px] w-full text-center mt-[5%]`}>
                {hospitalInfo.get(params.hid).name}
            </div>
        </div>
    )
}

export async function generateStaticParams(){
    return (
        [{hid:"001"},{hid:"002"},{hid:"003"}]
    )
}

