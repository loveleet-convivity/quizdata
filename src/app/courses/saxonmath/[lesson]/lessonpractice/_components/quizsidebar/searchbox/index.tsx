import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="relative">
      <input
        className="rounded-[0.5rem] pl-[2rem] border py-[0.625rem] w-[100%] text-[1rem] font-[400]"
        placeholder="Search"
        type="text"
      />
      <Search
        color="#667085"
        className="absolute z-[2] top-[0.75rem] left-2 w-[20px] h-[20px]"
      />
    </div>
  );
};

export default SearchBox;
