'use client'
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer"
import { useWindowListener } from "@/components/hooks/useWindowListener";

export default function PromoteCard() {
    const [playing,setPlaying] = useState(true);
    
    useWindowListener('contextmenu', (e) => {e.preventDefault();});

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-yellow-200 flex">
            <div className="">
                <VideoPlayer videoPath="/video/getvaccine.mp4" isPlaying={playing} />
            </div>
            <div className="flex flex-col items-center justify-center ml-[60px]">
                <span className="text-[30px] font-bold pb-2">Welcome to my Vaccine</span>
                <button
                className="text-[25px] block rounded-md bg-blue-600 
                hover:bg-white px-[20px] py-2 text-white shadow-sm border-2 
                border-black transform transform-colors duration-300 hover:border-white hover:text-black"
                onClick={() => {
                    setPlaying(!playing);
                }}
                >
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}