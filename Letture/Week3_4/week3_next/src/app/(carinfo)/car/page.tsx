import CarCatalog from "@/components/CarCatalog";
import getCars from "@/libs/getCars"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/CarPanel";

export default async function Car(){
    const cars = await getCars();

    return (
       <main className="mt-[50px] text-center">
            <h1 className="text-xl font-medium">Select Your Character Partner</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CarCatalog carJson={cars}/>
            </Suspense>
            <hr className="my-18"/>
            <h1 className="text-xl font-medium mt-[20px]"> TRY Client-side Car Panel</h1>
            <CarPanel/>
       </main>
    )
}