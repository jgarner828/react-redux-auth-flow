import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials =>({
                url: 'http://localhost:3500/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        createUser: builder.mutation({
            query: credentials =>({
                url: 'http://localhost:3500/register',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})


export const { useLoginMutation, useCreateUserMutation } = authApiSlice;