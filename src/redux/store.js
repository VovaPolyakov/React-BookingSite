import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { hotelApi } from "../ducks/hotel/hotel-api";

import { hotelReducer } from "../ducks/hotel/hotel-slice";


export const store = configureStore({
    reducer:{
        [hotelApi.reducerPath]:hotelApi.reducer,
        hotel:hotelReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(hotelApi.middleware)
})

setupListeners(store.dispatch)