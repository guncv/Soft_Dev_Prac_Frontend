import Banner from '@/components/banner'
import Card from '@/components/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div className="flex flex-row flex-wrap justify-around my-5">
          <Card name="Chulalongkorn Hospital" 
            information="พร้อมให้บริการด้วยทีมแพทย์ผู้เชี่ยวชาญและเครื่องมือแพทย์ที่
            ทันสมัยเพราะ เราใส่ใจทุกชีวิต"
            picture="/img/chula.jpg"/>
          <Card name="Rajavithi Hospital"
            information="เป็นองค์กรนำด้านสุขภาพที่สำคุญของชาติ และมุ่งมั่นสู่การเป็นศูนย์การแพทย์
            ชั้นนำระดับนานาชาติ"
            picture="/img/rajavithi.jpg"/>
          <Card name="Thammasat University Hospital"
            information='ผ่านการรับรองกระบวนการคุณภาพขั้นก้าวหน้า'
            picture="/img/thammasat.jpg"/>
        </div>
      </div>
    </main>
  )
}
