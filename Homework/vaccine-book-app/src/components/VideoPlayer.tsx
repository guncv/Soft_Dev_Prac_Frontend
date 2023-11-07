'use client'
import { useEffect, useRef } from "react";

interface Props{
    vdoSrc:string
    isPlaying:boolean
}

export default function VideoPlayer({vdoSrc,isPlaying}:Props){
    const playingRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if(isPlaying){
            playingRef.current?.play();
        } else {
            playingRef.current?.pause();
        }
    },[isPlaying])

    return (
        <video className="rounded-lg border-[3px] border-zinc-600" ref={playingRef} src={vdoSrc} 
        controls loop/>
    )
}