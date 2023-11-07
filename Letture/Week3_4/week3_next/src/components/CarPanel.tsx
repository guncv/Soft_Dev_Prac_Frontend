'use client'
import ProductCard from "./productcard";
import {useReducer} from "react"
import Link from "next/link"

export default function CarPanel(){
    const compareReducer = (compareList:Set<string>, action:{type:string,carName:string}) => {
        switch(action.type){
            case 'add' : {
                return new Set(compareList.add(action.carName));
            } case "remove" : {
                compareList.delete(action.carName);
                return new Set(compareList);
            } default : return compareList;
        }
    }

    const [compareList , dispatchCompare] = useReducer(compareReducer, new Set<string>());
    const mockCarRepo = [
        {cid: "001" , name:"Blade" , image:"/img/blade.webp"},
        {cid: "002" , name:"Kafka" , image:"/img/kafka.jpg"},
        {cid: "003" , name:"Silver Wolf" , image:"/img/silverWolf.webp"},
        {cid: "004" , name:"Clara" , image:"/img/clara.avif"},
    ]
    
    return (
        <div>
            <div style={{margin:"20px" , display:"flex" , flexDirection:"row" ,
            flexWrap:"wrap" , justifyContent:"space-around" , alignContent:"space-around"}}>
            {
                mockCarRepo.map((carItem)=>(
                    <Link href={`/car/${carItem.cid}`} className="w-1/5">
                    <ProductCard carName={carItem.name} imgSrc={carItem.image} 
                    onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                    </Link>
                ))
            } 
            </div>
            <div className="w-full text-xl font-medium">Compare List : {compareList.size}</div>
            {Array.from(compareList).map((car)=><div key={car} onClick={()=>dispatchCompare({type:"remove",carName:car})}>{car}</div>)}
        </div>
    )
}