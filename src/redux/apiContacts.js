// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://6364f0387b209ece0f52b872.mockapi.io' }),
//     tagTypes: ['Contacts'],
//     endpoints: (builder) => ({
//         getContacts: builder.query({
//             query: () => '/contacts/fetchAll',
//             providesTags: (result) =>
//                 result[{ type: "Contacts", id: "LIST" }]
//         }),
//         addContacts: builder.mutation({
//             query(contact) {
//                 return {
//                     method: 'POST',
//                     url: '/',
//                     body: JSON.stringify(contact)
//                 }
//             },
//             invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
//         }),
//         removeContacs: builder.mutation({
//             query: (id) => ({
//                 url: `contacts/${id}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: [{ type: "Contacts", id: "LIST" }]
//         })
//     }),
// })

// export const { useGetContactsQuery } = api

