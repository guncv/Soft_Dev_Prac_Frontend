import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Car(){
    const cars = getCars();

    return (
        <main className="text-center mt-[40px]">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ..... <LinearProgress/></p>}>
                <CarCatalog carJson={cars}/>
            </Suspense>
        </main>
    )
}