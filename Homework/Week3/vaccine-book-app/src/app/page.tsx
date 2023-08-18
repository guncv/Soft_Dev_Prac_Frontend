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
          <Card/>
        </div>
      </div>
    </main>
  )
}
