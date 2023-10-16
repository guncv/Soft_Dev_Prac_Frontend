import Image from "next/image"
import getCar from "@/libs/getCar"

export default async function CarDetailPage({params} : {params:{cid:string}}){
    const carDetail = await getCar(params.cid);
    /**
     * Mock Data for Demonstation Only
     */
    // const mockCarRepo = new Map()
    // mockCarRepo.set("001",{name:"Blade",image:"/img/blade.webp"})
    // mockCarRepo.set("002",{name:"Kafka",image:"/img/kafka.jpg"})
    // mockCarRepo.set("003",{name:"Silver Wolf",image:"/img/silverWolf.webp"})
    // mockCarRepo.set("004",{name:"Clara",image:"/img/clara.avif"})

    return (
        <main className="text-center p-5 mt-[40px]">
            <h1 className="text-lg font-medium">{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture}
                alt="Car Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"></Image>
                <div className="text-md mx-5">{carDetail.data.description}</div>
                <div className="text-md mx-5">Doors: {carDetail.data.doors}</div>
                <div className="text-md mx-5">Seats: {carDetail.data.seats}</div>
                <div className="text-md mx-5">Large Bags: {carDetail.data.largebags}</div>
                <div className="text-md mx-5">Small Bags: {carDetail.data.smallbags}</div>
                <div className="text-md mx-5">Daily Rental Rate: {carDetail.data.dayRate}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams(){
    return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}];
}