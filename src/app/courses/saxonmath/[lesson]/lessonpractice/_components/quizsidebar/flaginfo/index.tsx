import { Bookmark } from "lucide-react";
import React from "react";

const FlagInfo = ({ isSidebarVisible }: any) => {
  return (
    <div
      className={`bg-white border-[0.0625rem] border-gray-200 flex flex-col gap-2 justify-center py-[0.5rem] px-[0.75rem] absolute  rounded-full h-[6.5rem] max-md:left-16 max-md:absolute top-20 left-2 max-md:top-2 ${
        isSidebarVisible
          ? "hidden"
          : "max-md:flex max-md:flex-row max-md:h-[2.25rem]"
      }`}
    >
      <Bookmark fill="#F6B14D" color="#F6B14D" height="20" width="20" />
      <div className=" bg-gray-300 px-[4px] rounded-[0.1875rem] text-gray-700 text-[0.75rem] font-[600] text-center w-[1.25rem] h-[1.125rem]">
        7
      </div>
      <div className=" bg-gray-300 px-[4px] rounded-[0.1875rem] text-gray-700 text-[0.75rem] font-[600] text-center w-[1.25rem] h-[1.125rem]">
        11
      </div>
    </div>
  );
};

export default FlagInfo;
