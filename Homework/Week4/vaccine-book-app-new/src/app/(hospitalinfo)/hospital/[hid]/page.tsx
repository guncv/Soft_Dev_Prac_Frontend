import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {

  const hospitalDetail = await getHospital(params.hid);

  return (
    <main className="text-center p-5">
      <div className="flex mt-[60px]">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[40%] border-4 border-white"
        />
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-[50px] mx-5 mb-10 font-bold">
            {hospitalDetail.data.name}
          </div>
          <div className="text-[25px] mx-5">
              <span className="font-bold pr-4 text-[30px]">Location:</span>
              <span>{hospitalDetail.data.address} <span>{hospitalDetail.data.province}, {hospitalDetail.data.postalcode}</span></span>
            <div className="mt-6 text-[25px]">
              <span className="font-bold pr-4 text-[30px]">Tel: </span>
              <span>{hospitalDetail.data.tel}</span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}