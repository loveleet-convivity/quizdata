import React from "react";
import SearchBox from "../searchbox";
import { BookImage } from "@/app/assets/svgs/svg";

const SidebarHead = () => {
  return (
    <div className="p-[1rem] bg-gray-100 border-b-[0.0625rem] flex flex-col gap-[1rem] border-r-[0.0625rem] border-gray-200">
      <div className="flex items-center">
        <BookImage />
        <p className="text-[1.25rem] font-[600] text-[#03080E]">
          Saxon Math 5/4
        </p>
      </div>
      <SearchBox />
    </div>
  );
};

export default SidebarHead;
