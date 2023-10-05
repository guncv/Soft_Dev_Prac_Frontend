import CarPanel from '@/components/CarPanel'
import PromoteCard from '@/components/PromoteCard'
import Banner from '@/components/banner'
import Card from '@/components/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <PromoteCard/>
      </div>
    </main>
  )
}
