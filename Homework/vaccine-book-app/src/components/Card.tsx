'use client'
import CardItem from "./CardItem"
import styles from "@/styles/FontPage.module.css"
import { useReducer } from "react"

export default function Card(){
    const[ratingList,dispatchRating] = useReducer(reducerFunction,new Map<string,number>());
    const rating=[
        "Useless","Bad","Ok","Good","Excellent"
    ];

    function reducerFunction(ratingList:Map<string,number>, action:{type:string,hospitalName:string,rating:number}){
        switch (action.type){
            case "add" : {
                ratingList.set(action.hospitalName,action.rating);
                return new Map(ratingList);
            } case "remove" :{
                ratingList.delete(action.hospitalName);
                return new Map(ratingList);
            } default : return ratingList;
        }
    }

    return (
        <div>
            <div className="flex flex-row relative justify-around space-x-[20px] mt-[40px] flex-wrap">
                <CardItem picture="/img/chula.jpg" name="Chulalongkorn Hospital"
                onRating={(rate:number,name:string)=>dispatchRating({type:"add",hospitalName:name,rating:rate})}
                ratingList={ratingList}/>
                <CardItem picture="/img/rajavithi.jpg" name="Rajavithi Hospital"
                onRating={(rate:number,name:string)=>dispatchRating({type:"add",hospitalName:name,rating:rate})}
                ratingList={ratingList}/>
                <CardItem picture="/img/thammasat.jpg" name="Thammasat University Hospital"
                onRating={(rate:number,name:string)=>dispatchRating({type:"add",hospitalName:name,rating:rate})}
                ratingList={ratingList}/>
            </div>

            <div className={`${styles.font} text-[20px] ml-[100px] mb-[30px] bg-slate-200 w-[700px] p-[10px] rounded-3xl`}>
                <div className="w-full text-[50px] font-bold text-center">Hospital Rating :</div>
                {Array.from(ratingList.entries()).map(([key,value])=>
                <div className="ml-[50px] text-center text-[25px] my-[10px]" key={key} onClick={()=>dispatchRating({type:"remove",hospitalName:key,rating:value})}>
                    {key} : {value}  <span className="font-bold">{rating[value-1]}</span>
                </div>)}
            </div>
        </div>

    )
}