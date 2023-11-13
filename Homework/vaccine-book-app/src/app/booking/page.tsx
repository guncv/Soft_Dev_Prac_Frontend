import BookingForm from "@/components/BookingForm"

export default async function Booking(){
    return (
        <div className="w-screen h-screen items-center center 
        flex justify-center bg-slate-700">
            <BookingForm/>
        </div>
    )
}