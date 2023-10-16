import Link from "next/link"
import ProductCard from "./productcard"

interface Props{
    carJson:Object
}

export default async function CarCatalog({carJson}:Props){
    const carJsonReady = await carJson;
    
    return (
        <>
        Explore {carJson.count} models in our catalog
        <div style={{margin:"20px" , display:"flex" , flexDirection:"row" ,
            flexWrap:"wrap" , justifyContent:"space-around" , alignContent:"space-around"}}>
            {
                carJson.data.map((carItem:Object)=>(
                    <Link href={`/car/${carItem.id}`} className="w-1/5">
                    <ProductCard carName={carItem.model} imgSrc={carItem.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}