import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  tagTypes: ["auth"],

  endpoints: (builder) => ({
    // login
    login: builder.mutation({
      query: (creadentials) => ({
        url: `/auth/login`,
        method: "POST",
        body: creadentials,
      }),
      invalidatesTags: ["auth"],
    }),
    getProfile: builder.query({
      query: () => "/user/profile",
      providesTags:["auth"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation ,useGetProfileQuery} = authApi;
