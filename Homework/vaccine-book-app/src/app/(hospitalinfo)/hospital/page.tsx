import Card from "@/components/Card";
import HospitalCatalog from "@/components/HospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import styles from "@/styles/FontPage.module.css"
import getHospitals from "@/libs/getHospitals";

export default async function HospitalPage(){
    const hospitals = await getHospitals();

    return (
        <div className="mt-[100px]">
          <Suspense fallback={<p className={`${styles.font} text-white text-center text-[40px]`}>Loading...
            <LinearProgress/></p> }>
            <HospitalCatalog hospitalJson={hospitals}/>
          </Suspense>
        </div>
    )
}