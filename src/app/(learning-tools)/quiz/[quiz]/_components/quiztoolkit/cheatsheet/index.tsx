import React from "react";
import Card from "./card";
import { CheatSheetIcon } from "@/app/assets/svgs/svg";

export default function cheat() {
  return (
    <div className="flex flex-col gap-[8px] ">
      <div className="flex gap-[8px] items-center px-2 bg-gray-200 pb-4 text-[#03080E] text-xl font-semibold leading-8">
        <CheatSheetIcon />
        Cheat Sheet
      </div>
      <div className="bg-white p-4 flex flex-col gap-[16px]  overflow-y-scroll h-[85vh] scrollbar-w-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
