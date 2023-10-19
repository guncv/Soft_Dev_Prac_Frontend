'use client'
import Image from "next/image";
import CardAction from "./cardAction";
import { Rating, Typography } from "@mui/material";
import { useState } from "react"

interface Props {
    picture:string;
    name:string;
    information:string;
    onCompare:Function;
    hospitalSrc:string
    ratingList:Map<string,number>;
}

export default function Card({picture,name,information,onCompare,hospitalSrc,ratingList}:Props){

    return (
        <CardAction>
            <div className="flex flex-col">
                <div className="h-[200px] py-2.5 relative">
                    <Image src={picture}
                    alt={name}
                    fill={true}
                    className="rounded-2xl"/>
                </div>
                <div className="my-3.5 text-center h-[100px]">
                    <h1 className="font-mono font-bold">{name}</h1>
                    <h2 className="font-mono ">{information}</h2>
                </div>
                <div className="ml-[20px]">
                    {
                    onCompare && ratingList ?
                    <Rating
                    name="simple-controlled"
                    value={ratingList.get(name) || 0}
                    onChange={(event,newValue) => {
                        event.stopPropagation();
                        console.log(ratingList.get(name));
                        onCompare(newValue);
                    }}
                    /> : ""
                    }
                </div>
            </div>
        </CardAction>
    );
}