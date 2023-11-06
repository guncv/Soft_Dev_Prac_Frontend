'use client'
import Link from "next/link";
import Card from "./card";
import { useReducer } from "react";

export default function CarPanel(){
    const ratingReducer = ( ratingList:Map<string,number>, action:{type:string , hospitalName:string , rating:number}) =>{
        switch(action.type){
            case 'add':{
                ratingList.set(action.hospitalName,action.rating)
                return new Map(ratingList)
            }
            case 'remove':{
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }

    const [ ratingList , dispatchCompare ] = useReducer( ratingReducer , new Map<string,number>());

    const mockHospital = [
        {
          hid: "001",
          hospitalName: "Chulalongkorn Hospital",
          imgSrc: "/img/chula.jpg",
          hospitalSrc: "https://chulalongkornhospital.go.th/kcmh/",
        },
        {
          hid: "002",
          hospitalName: "Rajavithi Hospital",
          imgSrc: "/img/rajavithi.jpg",
          hospitalSrc: "https://www.rajavithi.go.th/",
        },
        {
          hid: "003",
          hospitalName: "Thammasat University Hospital",
          imgSrc: "/img/thammasat.jpg",
          hospitalSrc: "https://www.hospital.tu.ac.th/",
        },
      ];

    return (
        <div className="block">
            <div className="flex flex-row justify-around space-x-[50px] mt-[30px]">
                {mockHospital.map((hospital) => (
                <Link href={`/hospital/${hospital.hid}`} key={hospital.hid}>
                    <Card
                    name={hospital.hospitalName}
                    information="..."
                    picture={hospital.imgSrc}
                    hospitalSrc={hospital.hospitalSrc}
                    onCompare={(score:number)=>dispatchCompare({type:"add",hospitalName:"Thammasat Hospital",rating:score})}
                    ratingList={ratingList}
                    />
                </Link>
            ))}
            </div>
            <div className="text-[50px]">
                <div className="w-full text-[70px] font-bold">Hospital Rating :</div>
                {Array.from(ratingList.entries()).map(([key,value])=>
                <div key={key} onClick={()=>dispatchCompare({type:"remove",hospitalName:key,rating:value})}>{key}: {value}</div>)}
            </div>
        </div>
    )
}