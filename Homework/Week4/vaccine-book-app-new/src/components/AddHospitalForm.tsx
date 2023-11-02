import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm() {
    const addHospital = async (addHospital: FormData) => {
        "use server"
        const name = addHospital.get("name")
        const address = addHospital.get("address")
        const district = addHospital.get("district")
        const province = addHospital.get("province")
        const postalCode = addHospital.get("postalCode")
        const tel = addHospital.get("tel")
        const picture = addHospital.get("picture")

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                name,
                address,
                district,
                province,
                postalCode,
                tel,
                picture
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("hospitals")
        redirect("/hospital")

    }

    return (
        <form action={addHospital} className="flex flex-col items-center justify-center w-full h-full
		border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-10 py-5 mt-10 border-4 bg-white
         transform transition-colors duration-300">
            <div className="text-xl text-gray-700 font-bold">Add Hospital Form</div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="name">Hospital name</label>
                <input type="text" required id="name" name="name" placeholder="Hospital name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="address">Address</label>
                <input type="text" required id="address" name="address" placeholder="Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="district">District</label>
                <input type="text" required id="district" name="district" placeholder="District"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="province">Province</label>
                <input type="text" required id="province" name="province" placeholder="Province"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="postalCode">Postal Code</label>
                <input type="text" required id="postalCode" name="postalCode" placeholder="Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="tel">Tel.</label>
                <input type="text" required id="tel" name="tel" placeholder="Tel."
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="picture">Picture</label>
                <input type="text" required id="picture" name="picture" placeholder="Google drive URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-2 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                    Add
                </button>
            </div>
        </form>
    )
}