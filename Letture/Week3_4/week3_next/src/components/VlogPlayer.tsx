'use client'
import { useRef,useEffect, useState } from "react"
import { useWindowListener } from "@/app/hooks/useWindowListener"

interface Props {
    vdoSrc:string
    isPlaying:boolean
}

export function VlogPlayer({vdoSrc,isPlaying}:Props){

    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying){
            //alert("Play VDO");
            vdoRef.current?.play();
        }else{
            //alert("Pause Vdo")
            vdoRef.current?.pause();
        }
    } , [isPlaying])
    useWindowListener("resize",(e)=>{alert("Window Width is" + (e.target as Window).innerWidth)});

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}