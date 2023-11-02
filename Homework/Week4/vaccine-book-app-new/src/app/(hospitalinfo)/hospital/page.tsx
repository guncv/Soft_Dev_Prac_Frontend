import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
 
export default async function Car() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null
  const profile = session ? await getUserProfile(session.user.token) : null;
  
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
          <div className="flex flex-wrap justify-center">
            <HospitalCatalog hospitalJson={hospitals} />
          </div>
        {
          (profile?.data.role == "admin") ? <AddHospitalForm/> : null
        }
        </Suspense>

    </main>
  );
}