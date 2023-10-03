"use client";
import {
  CalculatorIcon,
  CheatSheetIcon,
  PracticeProblemIcon,
  VideosIcon,
} from "@/app/assets/svgs/svg";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const QuestionBoxTools = ({
  setShowSidebar,
  setSidebarContent,
  sidebarContent,
}: any) => {
  return (
    <div className="bg-gray-50 rounded-tr-[0.5rem] rounded-br-[0.5rem] py-[1rem] w-[2.5rem] gap-[0.5rem] flex flex-col">
      <Button
        onClick={() => {
          setShowSidebar(true), setSidebarContent("calculator");
        }}
        className={`px-0 py-[0.25rem] border-r-2 h-fit ${
          sidebarContent === "calculator"
            ? "border-r-[#3333FF]"
            : "border-r-transparent"
        }`}
      >
        <CalculatorIcon />
      </Button>
      <Button
        onClick={() => {
          setShowSidebar(true), setSidebarContent("videos");
        }}
        className={`px-0 py-[0.25rem] border-r-2 h-fit ${
          sidebarContent === "videos"
            ? "border-r-[#3333FF]"
            : "border-r-transparent"
        }`}
      >
        <VideosIcon />
      </Button>
      <Button
        onClick={() => {
          setShowSidebar(true), setSidebarContent("practiceproblem");
        }}
        className={`px-0 py-[0.25rem] border-r-2 h-fit ${
          sidebarContent === "practiceproblem"
            ? "border-r-[#3333FF]"
            : "border-r-transparent"
        }`}
      >
        <PracticeProblemIcon />
      </Button>
      <Button
        onClick={() => {
          setShowSidebar(true), setSidebarContent("cheatsheet");
        }}
        className={`px-0 py-[0.25rem] border-r-2 h-fit ${
          sidebarContent === "cheatsheet"
            ? "border-r-[#3333FF]"
            : "border-r-transparent"
        }`}
      >
        <CheatSheetIcon />
      </Button>
    </div>
  );
};

export default QuestionBoxTools;
