import Image from 'next/image'
import Banner from '@/components/Banner'
import PromoteCard from '@/components/PromoteCard'

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
