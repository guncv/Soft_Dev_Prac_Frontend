import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'
import Card from '@/components/card'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div className={styles.eachCard}>
          <Card name="Chulalongkorn Hospital" 
          picture="/img/chula.jpg"/>
          <Card name="Rajavithi Hospital"
          picture="/img/rajavithi.jpg"/>
          <Card name="Thammasat University Hospital"
          picture="/img/thammasat.jpg"/>
        </div>
      </div>
    </main>
  )
}
