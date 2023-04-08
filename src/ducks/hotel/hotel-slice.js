import { createSlice } from "@reduxjs/toolkit";

export const hotelSlice = createSlice({
    name:'hotel',
    initialState:{
        city:[],
        data:[]
    },
    reducers:{
        getDataAboutUser:(state,action) => {
            state.city.push(action.payload)
        }
    }
})

export const hotelActions = hotelSlice.actions;
export const hotelReducer = hotelSlice.reducer