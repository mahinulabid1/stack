
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const API = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://reqres.in'}),
  endpoints : (builder) =>({  
    getUserInfo: builder.query({
      query: (page) => `/api/users?page=${page}`
    }),

    createNewUser: builder.mutation({
      query: (userInformation) => ({ 
        url: '/api/users',
        method: 'POST',
        body: userInformation 
      })
    }),

    login : builder.mutation({
      query: (userInformation) => ({ 
        url: '/api/login',
        method: 'POST',
        body: userInformation 
      })
    })
    
  })
})


export const { 
  useGetUserInfoQuery ,
  useCreateNewUserMutation,
  useLoginMutation
} = API;

