// import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// creating API slice 
export const API = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://reqres.in'}),
  //tagTypes: ['product'], // optional, don't know what it does yet
  endpoints : (builder) =>({  // in here ({}), why wrapped in ()? this  means it immidaitely returns what's inside of (). it is still an arrow function
    getUserInfo: builder.query({
      // builder.query is used to send GET request and receive data as response
      query: (page) => `/api/users?page=${page}`
    }),

    createNewUser: builder.mutation({
      query: (userInformation) => ({ // wrapping {} this in () means that it will immidately return object
        url: '/api/users',
        method: 'POST',
        body: userInformation // information should be JSON format
      })
    }),

    login : builder.mutation({
      query: (userInformation) => ({ // wrapping {} this in () means that it will immidately return object
        url: '/api/login',
        method: 'POST',
        body: userInformation // information should be JSON format
      })
    })
    
  })
})


// useGetUserInfoQuery can be any name, it is not dependent
export const { 
  useGetUserInfoQuery ,
  useCreateNewUserMutation,
  useLoginMutation
} = API;

