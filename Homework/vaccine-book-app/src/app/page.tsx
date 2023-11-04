import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div>
          <Card/>
        </div>
      </div> 
    </main>
  )
}
