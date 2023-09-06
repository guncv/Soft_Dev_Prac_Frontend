import Image from "next/image";
import CardAction from "./cardAction";

interface Props {
    picture:string;
    name:string;
    information:string;
}

export default function Card({picture,name,information}:Props){
    return (
        <CardAction>
            <div className="h-2/4 py-2.5 relative">
                <Image src={picture}
                alt={name}
                fill={true}
                className="rounded-2xl"/>
            </div>
            <div className="my-3.5 text-center">
                <h1 className="text-2xl font-mono">{name}</h1>
                <h2 className="text-lg ">{information}</h2>
            </div>
        </CardAction>
    );
}