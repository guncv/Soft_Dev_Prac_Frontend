import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
 
export default function Car() {
  const hospitals = getHospitals();
  return (
    <main className="text-center mt-[50px] pt-[30px]">
      <div className="text-[30px] font-bold flex items-center justify-center">
        <span className="mr-3 mt-[30px]">โรงพยาบาลที่เข้าร่วมโครงการ</span>
        </div>
        <Suspense fallback={
          <div>
            <p className="text-xl font-bold">Loading...</p>
            <LinearProgress />
          </div>
        }>
          <div className="flex justify-center">
            <HospitalCatalog hospitalJson={hospitals} />
        </div>
        </Suspense>

    </main>
  );
}