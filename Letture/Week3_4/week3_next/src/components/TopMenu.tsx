import styles from './topmenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function TopMenu(){

    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt="logo"
            width={0} height={0} sizes='100vh'/>
           <TopMenuItem title='Reservation' pageRef='\resevations' />
           <TopMenuItem title='About' pageRef='/about' />
           {
            session ? 
            <Link href="/api/auth/signout">
                <div className="flex items-center absolute right-0 h-full px-2">
                    Sign-Out of {session.user?.name}
                </div>
            </Link> : 
            <Link href="/api/auth/signin">
                <div className="flex items-center absolute right-0 h-full px-2">
                    Sign in
                </div>
            </Link>
           }
       </div>
    )
}