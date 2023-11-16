"use client"
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import styles from "@/styles/FontPage.module.css"


export default function myBooking() {
    const bookingItems = useAppSelector(state => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <main className='bg-slate-600 w-[100%] items-center flex flex-col items-center space-y-4 mt-[12vh]'>
            {
                bookingItems.length === 0 ?
                    <div className={`${styles.font} text-white text-[40px]`}>No Vaccine Booking</div>
                    :
                    bookingItems.map((bookingItem) => (
                        <div className={`${styles.font} bg-white rounded-xl w-[90%] pl-5 py-2 text-white`} key={bookingItem.citizenId}>
                            <div className='flex font-bold text-[30px] mb-3'>{bookingItem.hospital}</div>
                            <div className='flex font-bold text-[20px]'>Name: <span className='font-normal pl-5'>{bookingItem.firstName}</span></div>
                            <div className='flex font-bold text-[20px]'>Surname: <span className='font-normal pl-5'>{bookingItem.lastName}</span></div>
                            <div className='flex font-bold text-[20px]'>CID: <span className='font-normal pl-5'>{bookingItem.citizenId}</span></div>
                            <div className='flex font-bold text-[20px]'>Booking Date: <span className='font-normal pl-5'>{bookingItem.bookingDate}</span></div>
                            
                            <button
                                className='bg-red-500 text-white border-2 border-red-800 border-opacity-100
                                font-semibold py-2 px-10 rounded-lg z-3
                                transform transition-colors duration-300 hover:bg-rose-800  hover:border-white
                                p-3 mt-5
                                '
                                onClick={() => { dispatch(removeBooking(bookingItem)) }}
                            >Cancel Booking</button>
                        </div>
                    ))
            }
        </main>
    )
}