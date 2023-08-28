import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'
import ProductCard from '@/components/productcard'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div style={{margin:"20px" , display:"flex" , flexDirection:"row" ,
      flexWrap:"wrap" , justifyContent:"space-around" , alignContent:"space-around"}}>
          <ProductCard carName="Blade" imgSrc="/img/blade.webp"/>
          <ProductCard carName="Kafka" imgSrc="/img/kafka.jpg"/>
          <ProductCard carName="Silver Wolf" imgSrc="/img/silverWolf.webp"/>
          <ProductCard carName="Clara" imgSrc="/img/clara.avif"/>
        </div>
      </div>
    </main>
  )
}
