'use client'
import styles from "./form.module.css"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, FormControl, TextField, InputLabel, Button } from "@mui/material"
import { useSearchParams } from "next/navigation";
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { BookingItem } from "../../interface"
import { addBooking } from "@/redux/features/bookSlice"
import { AppDispatch } from "@/redux/store"

export default function FormBooking(){

    const urlParams = useSearchParams();
    const hid = urlParams.get('id');
    const hName = urlParams.get('name');

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [cid, setCID] = useState<string>('');
    const [hospitalLocation, setHospitalLocation] = useState<string>(hName ? hName : '');
    const [vaccineDate, setVaccineDate] = useState<Dayjs | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const createBooking = () => {
        if (name && cid && vaccineDate && hospitalLocation) {
            const item: BookingItem = {
                name: name,
                surname: surname,
                cid: cid,
                hospitalLocation: hospitalLocation,
                vaccineDate: dayjs(vaccineDate).format('YYYY/MM/DD'),
            }
            dispatch(addBooking(item))
        }
    }

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
                    className={`${styles.allFont} bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white`} 
                    value={name} onChange={(value) => { setName(value.target.value); }} />

                    <label htmlFor="surname" className={`${styles.allFont} text-[20px]`}>Surname</label>
                    <input type="text" name="surname" placeholder="Your Surname"
                    className="bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white"
                    value={surname} onChange={(value) => { setSurname(value.target.value); }} />
                </div>

                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="idcard" className={`${styles.allFont} text-[20px]`}>ID Card</label>
                    <input type="number" name="idcard" placeholder="Your ID Card"
                    className={`${styles.allFont} bg-neutral-100 indent-2 rounded-xl ring-1 ring-gray-600 hover:bg-white`}
                    value={cid} onChange={(value) => { setCID(value.target.value) }} />
                </div>

                <div className="flex pt-[20px] space-x-[20px] justify-start">
                    <label htmlFor="hospital" className={`${styles.allFont} text-[20px]`}>Hospital</label>
                    <Select name="hospital" className={`${styles.allFont} w-[300px] h-[35px] bg-neutral-100 hover:bg-white`} 
                    variant="filled" value={hospitalLocation} onChange={(value) => { setHospitalLocation(value.target.value); }}>
                        <MenuItem value="Chula" className={styles.allFont}>Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi" className={styles.allFont}>Rajavithi Hospital</MenuItem>
                        <MenuItem value="Tammasat" className={styles.allFont}>Tammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-start items-center">
                    <label htmlFor="date" className={`${styles.allFont} text-[20px]`}>Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-neutral-100 hover:bg-white" value={vaccineDate} 
                        onChange={(value) => { setVaccineDate(value) }} />
                    </LocalizationProvider>
                </div>
                <div className="flex pt-[20px] space-x-[20px] justify-center items-center">
                    <button type="submit" className={`${styles.allFont} rounded-3xl bg-neutral-100 text-[20px] ring-1
                    ring-gray-600 hover:bg-white p-[5px]`} onClick={createBooking}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}