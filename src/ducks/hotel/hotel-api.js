import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const hotelApi = createApi({
    reducerPath:'hotel/api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://engine.hotellook.com'
    }),
    endpoints:(build) => ({
        getAllHotelApi: build.query({
            query:() => ({
                url:'/api/v2/lookup.json?query=london&lang=en'
            })
        })
    })
})

export const {useGetAllHotelApiQuery} = hotelApi