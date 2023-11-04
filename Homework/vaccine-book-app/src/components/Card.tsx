import CardItem from "./CardItem"

export default function Card(){
    return (
        <div className="flex flex-row relative justify-around space-x-[20px] flex-wrap">
            <CardItem picture="/img/chula.jpg" name="Chulalongkorn Hospital"/>
            <CardItem picture="/img/rajavithi.jpg" name="Rajavithi Hospital"/>
            <CardItem picture="/img/thammasat.jpg" name="Thammasat University Hospital"/>
        </div>
    )
}