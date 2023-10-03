"use client";
import React from "react";
import { useGetQuizQuestionsQuery } from "../state/slices/apiSlice";

const page = () => {
  const { data } = useGetQuizQuestionsQuery(64);
  return (
    <ul>
      {data?.map((item: any) => (
        <li>{item}</li>
      ))}
      ;
    </ul>
  );
};

export default page;
