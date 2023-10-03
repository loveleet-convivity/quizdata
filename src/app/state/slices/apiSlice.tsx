"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "topic",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://myfavoritetutor.com/",
    prepareHeaders: (headers) => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL215ZmF2b3JpdGV0dXRvci5jb20iLCJpYXQiOjE2OTU3ODg1MTksIm5iZiI6MTY5NTc4ODUxOSwiZXhwIjoxNjk2MzkzMzE5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxMiJ9fX0.6c-QRXS_pjk-pizVyuzQGhCWgCoCSNaR3wM9wm3uNsY";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // tagTypes: ['Topic'],
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: (id) => ({ url: `wp-json/ldlms/v2/sfwd-topic/${id}` }),
      transformResponse: (res: any) => res,
      // providesTags: (result, error, args) => [{ type: 'Topic', id: args.id }],
    }),
    getLesson: builder.query({
      query: (id = 11474) => ({ url: `wp-json/ldlms/v2/sfwd-lessons/${id}` }),
      transformResponse: (res: any) => res,
      // providesTags: (result, error, args) => [{ type: 'Topic', id: args.id }],
    }),
    getQuizQuestions: builder.query({
      query: (id) => ({ url: `wp-json/ldlms/v2/sfwd-quiz/${id}` }),
      transformResponse: (res: any) => res,
      // providesTags: (result, error, args) => [{ type: 'Topic', id: args.id }],
    }),
  }),

  keepUnusedDataFor: 5000,
});

export const { useGetLessonQuery, useGetTopicQuery, useGetQuizQuestionsQuery } =
  apiSlice;
