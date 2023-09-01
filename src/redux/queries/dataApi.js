import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
     reducerPath: 'dataApi',
     baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3033/'}),
     tagTypes: ['Detail'],
     endpoints: (builder) => ({
          getAllDetails: builder.query({
               query: ()=> "details",
               providesTags: ['Detail']
          })
     })
})

export const {useGetAllDetailsQuery  } = dataApi;