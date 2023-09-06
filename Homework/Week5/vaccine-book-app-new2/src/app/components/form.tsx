'use client'
import { Select,MenuItem } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function FormBooking(){

    function onFormAction(event:React.SyntheticEvent){
        if (event.type=="mouseover"){
            event.currentTarget.classList.add("shadow-amber-300");
        } else {
            event.currentTarget.classList.remove("shadow-amber-300");
        }
    }

    return (
        <div className="bg-amber-100 w-[700px] h-[50%] shadow-2xl rounded-2xl font-mono relative"
        onMouseOver={(e)=>onFormAction(e)}
        onMouseOut={(e)=>onFormAction(e)}>
            <div className="text-center pt-[11px] text-[30px] bg-amber-200 rounded-2xl font-bold">
                Booking Form
            </div>
            <div className="pl-[45px] ml-[20px]">
                <div className="flex pt-[30px]  space-x-[20px] justify-start">
                    <label htmlFor="name"className="text-[20px]">Name</label>
                    <input type="text" name="name" placeholder="Your Name"
                    className="bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white"/>
                    <label htmlFor="surname" className="text-[20px]">Surname</label>
                    <input type="text" name="surname" placeholder="Your Surname"
                    className="bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white"/>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="idcard" className="text-[20px]">ID Card</label>
                    <input type="number" name="idcard" placeholder="Your ID Card"
                    className="bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white"/>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="hospital" className="text-[20px]">Hospital</label>
                    <Select name="hospital" className="w-[300px] h-[35px] bg-neutral-100 hover:bg-white font-mono" variant="filled">
                        <MenuItem value="Chula" className="font-mono">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi" className="font-mono">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Tammasat" className="font-mono">Tammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start items-center">
                    <label htmlFor="date" className="text-[20px]">Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-neutral-100 hover:bg-white"/>
                    </LocalizationProvider>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-center items-center">
                    <button type="submit" className="rounded-3xl bg-neutral-100 text-[20px] ring-1
                    ring-gray-600 hover:bg-white p-[5px]">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}