import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"

type BookState = {
    bookItems:BookingItem[]
}

const initialState:BookState = {
    bookItems:[]
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookItems.push(action.payload);
        } , 
        removeBooking: (state,action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.filter(elem => {
                return elem.citizenId !== action.payload.citizenId
            })
            state.bookItems = remainItems;
        }
    }
})

export const {addBooking,removeBooking} = bookSlice.actions;
export default bookSlice.reducer;