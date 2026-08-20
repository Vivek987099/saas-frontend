import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",

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

  tagTypes: ["project"],

  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => "/project",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["project"],
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["project"]
    }),
  }),
});

export const { useGetAllProjectsQuery, useCreateProjectMutation } = projectApi;
