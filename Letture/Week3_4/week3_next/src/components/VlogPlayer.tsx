'use client'
import { useRef,useEffect,} from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

interface Props{
    vdoSrc:string
    isPlaying:boolean
}

export default function VlogPlayer({vdoSrc,isPlaying}:Props){
    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=> {
        if (isPlaying){
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    },[isPlaying])

    useWindowListener("resize",(e)=>{alert("Window Width is" + (e.target as Window).innerWidth)});

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}