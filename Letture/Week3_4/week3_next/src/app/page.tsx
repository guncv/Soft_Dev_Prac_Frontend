import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'
import ProductCard from '@/components/productcard'
import CarPanel from '@/components/CarPanel'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <CarPanel/>
      </div>
    </main>
  )
}
