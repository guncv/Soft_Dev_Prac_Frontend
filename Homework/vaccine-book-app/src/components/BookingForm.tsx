'use client'
import { MenuItem, Select } from "@mui/material"
import styles from "@/styles/FontPage.module.css"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import Image from "next/image"

export default function BookingForm(){
    function onFormAction(event:React.SyntheticEvent){
        if (event.type=="mouseover"){
            event.currentTarget.classList.add("shadow-slate-200");
        } else {
            event.currentTarget.classList.remove("shadow-slate-200");
        }
    }

    return (
        <div className={`${styles.font} w-[900px] h-[550px] bg-slate-200 rounded-2xl 
        shadow-xl border-slate-400 border-[10px]`}
        onMouseOver={(e)=>onFormAction(e)}
        onMouseOut={(e)=>onFormAction(e)}>
            <div className="mt-[20px] text-[40px] text-center font-bold flex justify-center">
                <h1 className="mt-[20px]">Vaccine Booking Form</h1>
                <Image src="/img/formLogo.png"
                alt="formLogo"
                width={100}
                height={100}/>
            </div>

            <div className="text-[20px] ml-[60px]">

                <div className="flex pt-[20px] space-x-[20px]">
                    {/* First Name */}
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="name" className="rounded-lg indent-2 
                    ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your First Name"/>
                    {/* Last Name */}
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="name" className="rounded-lg indent-2 
                    ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your Last Name"/>
                </div>

                <div className="pt-[30px] space-x-[20px] flex items-center">
                    {/* ID Card */}
                    <label htmlFor="idCard">Identification Card</label>
                    <Image src="/img/idCard.png"
                    alt="idCard"
                    width={60}
                    height={60}/>
                    <input type="number" name="idCard" placeholder="Your ID Card" className="rounded-lg indent-2 
                    ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]"/>
                </div>

                <div className="pt-[20px] space-x-[20px] flex items-center">
                    {/* Hospital Selection */}
                    <label htmlFor="hospital">Hospital</label>
                    <Image src="/img/formHospital.png"
                    alt="Hospital"
                    width={60}
                    height={60}/>
                    <Select name="hospital" className={`${styles.font} text-[20px] pb-[10px] w-[300px] h-[35px] 
                    bg-neutral-100 hover:bg-white`} variant="filled">
                        <MenuItem value="Chula" className={styles.font}>Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi" className={styles.font}>Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat" className={styles.font}>Thammasat University Hospital</MenuItem>
                    </Select>
                </div>

                <div className="pt-[20px] space-x-[20px] flex items-center">
                    {/* Date for Booking */}
                    <label htmlFor="date">Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-neutral-100 hover:bg-white"/>
                    </LocalizationProvider>
                </div>

                <div className="pt-[40px] space-x-[20px]">
                    {/* Submit Button */}
                    <button type="submit" className={`${styles.font} rounded-xl bg-slate-100 text-[20px] ring-2
                    ring-slate-600 hover:bg-white p-[5px] hover:scale-[1.15] duration-300`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}