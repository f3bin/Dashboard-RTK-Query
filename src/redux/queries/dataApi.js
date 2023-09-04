import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
     reducerPath: 'dataApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3033/' }),
     tagTypes: ['Detail'],
     endpoints: (builder) => ({
          getAllDetails: builder.query({
               query: () => "details",
               providesTags: ['Detail']
          }),
          addNotes: builder.mutation({
               query: (body) => ({
                    url: `details/${body.id}`,
                    method: 'PUT',
                    body: body     
               })
          }),
          updateNotes: builder.mutation({
               query: (body) => ({
                 url: `details/${body.id}`,
                 method: 'PUT',
                 body: body,
               }),
             }),
             deleteNotes:builder.mutation({
               query:(body)=>({
                    url:`details/${body.id}`,
                    method:'PUT',
                    body:body
               })
             })
     })
})   

export const { useGetAllDetailsQuery, useAddNotesMutation ,useUpdateNotesMutation ,useDeleteNotesMutation} = dataApi;