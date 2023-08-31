import Image from "next/image";

interface Props {
    picture:string;
    name:string;
    information:string;
}

export default function Card({picture,name,information}:Props){
    return (
        <div className="w-72 h-96 relative shadow-2xl rounded-2xl">
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
        </div>
    );
}