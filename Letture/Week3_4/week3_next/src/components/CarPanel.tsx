'use client'
import ProductCard from "./productcard";
import {useReducer} from "react"

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

    return (
        <div>
            <div style={{margin:"20px" , display:"flex" , flexDirection:"row" ,
      flexWrap:"wrap" , justifyContent:"space-around" , alignContent:"space-around"}}>
                <ProductCard carName="Blade" imgSrc="/img/blade.webp" 
                onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                <ProductCard carName="Kafka" imgSrc="/img/kafka.jpg" 
                onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                <ProductCard carName="Silver Wolf" imgSrc="/img/silverWolf.webp" 
                onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                <ProductCard carName="Clara" imgSrc="/img/clara.avif" 
                onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
            </div>
            <div className="w-full text-xl font-medium">Compare List : {compareList.size}</div>
            {Array.from(compareList).map((car)=><div key={car} onClick={()=>dispatchCompare({type:"remove",carName:car})}>{car}</div>)}
        </div>
    )
}