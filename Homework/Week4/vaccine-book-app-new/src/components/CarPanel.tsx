'use client'
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

    return (
        <div className="block">
            <div className="flex flex-row flex-wrap justify-around my-5">
                <Card name="Chulalongkorn Hospital" 
                    information="พร้อมให้บริการด้วยทีมแพทย์ผู้เชี่ยวชาญและเครื่องมือแพทย์ที่
                    ทันสมัยเพราะ เราใส่ใจทุกชีวิต"
                    picture="/img/chula.jpg"
                    onCompare={(score:number)=>dispatchCompare({type:"add",hospitalName:"Chulalongkorn Hospital",rating:score})}
                    ratingList={ratingList}/>
                <Card name="Thammasat University Hospital"
                    information='ผ่านการรับรองกระบวนการคุณภาพขั้นก้าวหน้า'
                    picture="/img/thammasat.jpg"
                    onCompare={(score:number)=>dispatchCompare({type:"add",hospitalName:"Thammasat Hospital",rating:score})}
                    ratingList={ratingList}/>
                <Card name="Rajavithi Hospital"
                    information="เป็นองค์กรนำด้านสุขภาพที่สำคุญของชาติ และมุ่งมั่นสู่การเป็นศูนย์การแพทย์ชั้นนำระดับนานาชาติ"
                    picture="/img/rajavithi.jpg"
                    onCompare={(score:number)=>dispatchCompare({type:"add",hospitalName:"Rajavithi Hospital",rating:score})}
                    ratingList={ratingList}/>
            </div>
            <div className="text-[50px]">
                <div className="w-full text-[70px] font-bold">Hospital Rating :</div>
                {Array.from(ratingList.entries()).map(([key,value])=>
                <div key={key} onClick={()=>dispatchCompare({type:"remove", hospitalName:key , rating:0})}>{key}: {value}</div>)}
            </div>
        </div>
    )
}