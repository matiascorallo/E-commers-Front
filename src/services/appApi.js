import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({

    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    endpoints: (builder) => ({
        singup: builder.mutation({
            query: user({
                url: "/users/singup",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation({
            query: user ({
                url: "/users/login",
                method: 'POST',
                body: user,
            }),
        }),
    }),
});

export const { useSingupMutation, useLoginMutation } = appApi

export default appApi;