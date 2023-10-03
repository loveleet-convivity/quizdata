"use client";
import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuestionBoxHead = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="flex justify-between max-md:flex-col">
      <p className=" text-[1.5rem] font-[700] text-[#03080E]">Question 14</p>
      <div>
        <Button
          onClick={() => setFlag((p) => !p)}
          className="flex font-[400] text-[0.875rem] justify-start p-0 text-gray-500"
        >
          {flag ? <Bookmark fill="#F6B14D" color="#F6B14D" /> : <Bookmark />}
          Flag for later
        </Button>
      </div>
    </div>
  );
};

export default QuestionBoxHead;
