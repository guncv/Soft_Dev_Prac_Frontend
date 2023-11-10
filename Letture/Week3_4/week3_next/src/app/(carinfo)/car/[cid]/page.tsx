import getCar from "@/libs/getCar";
import Image from "next/image"

interface Props {
    params:{cid:string}
}

export default async function CarDetailPage({params} : Props){
    /**
     * Mock Data for Demonstation Only
     */
    // const mockCarRepo = new Map()
    //     mockCarRepo.set("001",{name:"Blade",image:"/img/blade.webp"})
    //     mockCarRepo.set("002",{name:"Kafka",image:"/img/kafka.jpg"})
    //     mockCarRepo.set("003",{name:"Silver Wolf",image:"/img/silverWolf.webp"})
    //     mockCarRepo.set("004",{name:"Clara",image:"/img/clara.avif"})
    const carDetail = await getCar(params.cid);

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium  mt-[40px]">Car ID {carDetail.data.model}</h1>

            <div className="flex flex-row my-5">
                <Image className="rounded-lg w-[30%]"
                src={carDetail.data.picture}
                alt="Car Image"
                width={0} height={0} sizes="100vw"/>
                <div className="text-center">
                    <div className="text-md mx-5 text-[20px]">
                        {carDetail.data.model}
                    </div>
                    <div className="text-md mx-5 text-[20px]">
                        {carDetail.data.description}
                    </div>
                    <div className="text-md mx-5 text-[20px]">
                        Doors : {carDetail.data.doors}
                    </div>
                    <div className="text-md mx-5 text-[20px]">
                        Seats: {carDetail.data.seats}
                    </div>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams(){
    return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
}