'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import styles from "@/styles/FontPage.module.css"
import { useWindowListener } from "@/hook/useWindowListener";

export default function PromoteCard(){
    const [playing,setPlaying] = useState(true);

    useWindowListener("contextmenu",(e)=>{
        e.preventDefault();
    });

    return (
        <div className="bg-zinc-300 w-[80%] mt-[50px] rounded-lg flex flex-row ml-[10%] mb-[5%]">
            <div className="w-[50%] p-[10px] rounded-lg">
                <VideoPlayer vdoSrc="/video/getVaccine.mp4" isPlaying={playing}/>
            </div>
            <div className={`${styles.font} font-bold text-[2vw] w-[45%] mt-[2%] ml-[5%]`}>
                <h1 className=""><span className="text-orange-700">Get Your Va</span>ccine Today</h1>
                <button className={`${styles.font} rounded-2xl bg-sky-600 hover:scale-110 duration-300 px-3 py-2 
                text-white shadow-small ml-[5px] mt-[10%] text-[2vw] border-[4px] border-sky-800`}
                onClick={()=>{setPlaying(!playing);}}>
                    {playing? "Pause":"Play"}
                </button>
            </div>
        </div>
    )
}