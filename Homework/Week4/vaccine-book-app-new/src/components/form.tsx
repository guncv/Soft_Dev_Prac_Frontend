'use client'
import styles from "./form.module.css"
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
        <div className="bg-amber-100 w-[700px] h-[50%] shadow-2xl rounded-2xl relative"
        onMouseOver={(e)=>onFormAction(e)}
        onMouseOut={(e)=>onFormAction(e)}>
            <div className={`${styles.allFont} text-center pt-[11px] text-[30px] bg-amber-200 rounded-2xl font-bold`}>
                Booking Form
            </div>
            <div className="pl-[45px] ml-[20px]">
                <div className="flex pt-[30px]  space-x-[20px] justify-start">
                    <label htmlFor="name" className={`${styles.allFont} text-[20px]`}>Name</label>
                    <input type="text" name="name" placeholder="Your Name"
                    className={`${styles.allFont} bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white`}/>
                    <label htmlFor="surname" className={`${styles.allFont} text-[20px]`}>Surname</label>
                    <input type="text" name="surname" placeholder="Your Surname"
                    className="bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white"/>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="idcard" className={`${styles.allFont} text-[20px]`}>ID Card</label>
                    <input type="number" name="idcard" placeholder="Your ID Card"
                    className={`${styles.allFont} bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white`}/>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="hospital" className={`${styles.allFont} text-[20px]`}>Hospital</label>
                    <Select name="hospital" className={`${styles.allFont} w-[300px] h-[35px] bg-neutral-100 hover:bg-white`} variant="filled">
                        <MenuItem value="Chula" className={styles.allFont}>Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi" className={styles.allFont}>Rajavithi Hospital</MenuItem>
                        <MenuItem value="Tammasat" className={styles.allFont}>Tammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start items-center">
                    <label htmlFor="date" className={`${styles.allFont} text-[20px]`}>Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-neutral-100 hover:bg-white"/>
                    </LocalizationProvider>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-center items-center">
                    <button type="submit" className={`${styles.allFont} rounded-3xl bg-neutral-100 text-[20px] ring-1
                    ring-gray-600 hover:bg-white p-[5px]`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}