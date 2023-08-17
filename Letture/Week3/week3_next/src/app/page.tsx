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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </main>
  )
}
