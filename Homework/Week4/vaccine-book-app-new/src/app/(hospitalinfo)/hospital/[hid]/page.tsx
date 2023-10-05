import Image from "next/image"

export default function HospitalDetailPage({params,}:{params:{hid:string};}) {
    const mockHospitalRepo = new Map();
    mockHospitalRepo.set("001", {
        hospitalName: "Chulalongkorn Hospital",
        imgSrc: "/img/chula.jpg",
        hospitalSrc: "https://chulalongkornhospital.go.th/kcmh/",
    });
    mockHospitalRepo.set("002", {
        hospitalName: "Rajavithi Hospital",
        imgSrc: "/img/rajavithi.jpg",
        hospitalSrc: "https://www.rajavithi.go.th/",
    });
    mockHospitalRepo.set("003", {
        hospitalName: "Thammasat University Hospital",
        imgSrc: "/img/thammasat.jpg",
        hospitalSrc: "https://www.hospital.tu.ac.th/",
    });

    return (
        <main className="text-center p-5 mt-[50px]">
            <div className="flex mt-[60px] flex-row">
                <Image
                src={mockHospitalRepo.get(params.hid).imgSrc}
                alt="Car Image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-[40%] border border-4 border-white"
                />
                <div className="flex-grow flex flex-col justify-center items-center">
                <div className="text-[50px] mx-5 mb-10 font-bold">
                    {mockHospitalRepo.get(params.hid).hospitalName}
                </div>
                <div className="text-[20px] mx-5 text-blue-500">
                    <span className="text-black font-bold pr-4">Official website:</span>
                    <a
                    href={mockHospitalRepo.get(params.hid).hospitalSrc}
                    className="transition-all duration-300"
                    target="_blank"
                    >
                    {mockHospitalRepo.get(params.hid).hospitalSrc}
                    </a>
                </div>
                </div>
            </div>
        </main>
  );
}