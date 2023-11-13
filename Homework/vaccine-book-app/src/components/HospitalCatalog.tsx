import Link from "next/link";
import CardItem from "./CardItem";
import getHospitals from "@/libs/getHospitals";

export default async function HospitalCatalog(){
    const hospitalInfo = await getHospitals();

    return (
        <div className="flex flex-row relative justify-around space-x-[20px] mt-[40px] flex-wrap">
                    {hospitalInfo.data.map((cardItem:Object) => 
                        <Link href={`/hospital/${cardItem.id}`}>
                        <CardItem picture={cardItem.picture} name={cardItem.name}/>
                        </Link>
                        )
                    }
                
        </div>
    )
}