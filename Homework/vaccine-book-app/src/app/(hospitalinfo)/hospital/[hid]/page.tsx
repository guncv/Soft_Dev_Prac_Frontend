import Image from "next/image";
import styles from "@/styles/FontPage.module.css"
import getHospital from "@/libs/getHospital";

interface Props {
    params:{hid:string}
}

export default async function HospitalInformation({params}:Props){
    const hospitalInfo = await getHospital(params.hid);
    // const hospitalInfo = new Map()
    // hospitalInfo.set("001",{picture:"/img/chula.jpg",name:"Chulalongkorn Hospital"});
    // hospitalInfo.set("002",{picture:"/img/rajavithi.jpg",name:"Rajavithi Hospital"});
    // hospitalInfo.set("003",{picture:"/img/thammasat.jpg",name:"Thammasat University Hospital"});

    return (
        <div className="flex flex-row ml-[5%] mt-[100px] rounded-xl">
            <Image className="w-2/5"
            src={hospitalInfo.data.picture}
            alt={hospitalInfo.data.name}
            width={2000} height={2000}/>
            <div className={`${styles.font} text-black w-full text-center bg-zinc-200 mr-[5%]`}>
                <div className="text-[40px] font-bold">
                    {hospitalInfo.data.name}
                </div>
                <div className="text-[20px]">
                    <div className="mt-[10%]">
                        Address : {hospitalInfo.data.address}
                    </div>
                    <div>
                        Province : {hospitalInfo.data.province}
                    </div>
                    <div>
                        District : {hospitalInfo.data.district}
                    </div>
                    <div className="flex flex-row justify-center">
                        Telephone <Image className="w-[30px] h-[30px] mx-[5px]"
                        src="/img/teloIcon.png"
                        alt="telephone icon"
                        width={100}
                        height={100}
                        />: {hospitalInfo.data.tel}
                    </div>
                    <div>
                        Postal code : {hospitalInfo.data.postalcode}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams(){
    return (
        [{hid:"001"},{hid:"002"},{hid:"003"}]
    )
}

