import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
     reducerPath: 'dataApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3033/' }),
     tagTypes: ['Detail'],
     endpoints: (builder) => ({
          getPageDetails: builder.query({
               query: (page) => `details/?_page=${page}&_limit=20`,
               serializeQueryArgs: ({ endpointName }) => {
                    console.log(endpointName, "endpointname")
                    return endpointName;
               },
               merge: (currentCache, newItems) => {
                    currentCache?.push(...newItems);
               },
               forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
               },
               providesTags: ['Detail']
          }),
          getAllDetails: builder.query({
               query: () => 'details',
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
          deleteNotes: builder.mutation({
               query: (body) => ({
                    url: `details/${body.id}`,
                    method: 'PUT',
                    body: body
               })
          })
     })
})

export const { useGetAllDetailsQuery, useGetPageDetailsQuery, useAddNotesMutation, useUpdateNotesMutation, useDeleteNotesMutation } = dataApi;


