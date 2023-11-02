import FormBooking from "@/components/form"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function BookingPage(){
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main>
            {
                session ?
                <div className="my-11 w-screen h-screen items-center flex justify-center">
                <FormBooking/>
                </div>
                : null
            }
        </main>
    )
}