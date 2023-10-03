import React, { useState } from "react";
import Calc from "./calc";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalculatorIcon } from "@/app/assets/svgs/svg";

export default function calculator() {
  const [changecal, setChangeCal] = useState("simple");

  return (
    <div className="h-[100%] bg-white">
      <div className="flex gap-[4px] bg-gray-200 px-2 items-center pb-4 text-[#03080E] text-xl font-semibold leading-8">
        <CalculatorIcon />
        Calculator
      </div>
      <div className=" p-[1rem] gap-[10px] flex flex-col h-[85vh] overflow-y-scroll scrollbar-w-6">
        <div className="flex flex-col gap-[6px] text-[14px] font-[500]">
          Calculator Type
          <Select
            value={changecal}
            onValueChange={(value) => setChangeCal(value)}
          >
            <SelectTrigger className="w-full border-[#D0D5DD] rounded-[0.5rem]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="sci">Scientific</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Calc change={changecal} />
      </div>
    </div>
  );
}
