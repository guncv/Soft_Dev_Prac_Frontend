"use client"
import { useEffect, useRef } from "react";

interface Props {
    videoPath:string
    isPlaying:boolean
}

export function VideoPlayer({videoPath, isPlaying} : Props) {
    const vdoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <div>
            <video src={videoPath} ref={vdoRef} controls loop muted/>
        </div>
    )
}