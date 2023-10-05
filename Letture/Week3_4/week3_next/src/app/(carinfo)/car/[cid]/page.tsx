import Image from "next/image"

export default function CarDetailPage({params} : {params:{cid:string}}){
    /**
     * Mock Data for Demonstation Only
     */
    const mockCarRepo = new Map()
    mockCarRepo.set("001",{name:"Blade",image:"/img/blade.webp"})
    mockCarRepo.set("002",{name:"Kafka",image:"/img/kafka.jpg"})
    mockCarRepo.set("003",{name:"Silver Wolf",image:"/img/silverWolf.webp"})
    mockCarRepo.set("004",{name:"Clara",image:"/img/clara.avif"})

    return (
        <main className="text-center p-5 mt-[40px]">
            <h1 className="text-lg font-medium">Car ID {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image src={(mockCarRepo.get(params.cid)).image}
                alt="Car Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"></Image>
                <div className="text-md mx-5">{(mockCarRepo.get(params.cid)).name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams(){
    return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}];
}