'use client'
import { useRef,useEffect, useState } from "react"
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

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}