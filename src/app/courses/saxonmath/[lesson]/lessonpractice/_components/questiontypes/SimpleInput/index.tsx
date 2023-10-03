import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function SimpleInput({ hello }: any) {
  console.log("hello", hello);
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Input
        className="py-[0.625rem] w-[100%] h-[2.3rem] px-[0.875rem] border-[0.0625rem] rounded-[0.5rem] border-gray-300  gap-[0.5rem]"
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SimpleInput;
