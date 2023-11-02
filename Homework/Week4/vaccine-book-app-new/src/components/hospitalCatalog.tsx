import Card from "./card"
import Link from "next/link";

export default async function hospitalCatalog({ hospitalJson }: { hospitalJson: Object }) {

    const hospitalJsonReady = await hospitalJson;

    return (
        <div className="block">
            <div className="flex flex-wrap -mx-2 mt-3">
                {hospitalJsonReady.data.map((hospitalItem: Object) => (
                    <div key={hospitalItem.id} className="w-1/3 px-2 my-7">
                        <Link href={`/hospital/${hospitalItem.id}`}>
                            <Card
                                name={hospitalItem.name}
                                picture={hospitalItem.picture}
                                hospitalSrc={hospitalItem.tel}
                            />
                        </Link>
                     </div>
                    ))
                }
            </div>
        </div>
    )
}