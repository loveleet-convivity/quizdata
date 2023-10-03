import { AlertCircle } from "lucide-react";
import React from "react";

const QuestionNote = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-[#FDEFDB] text-[#A07332] border-[#F6B14D] border-[1px] rounded-[1rem] gap-[0.5rem] text-[0.875rem] font-[600] flex items-start px-[0.75rem] py-[0.25rem]">
        <AlertCircle />
        <p className="font-[400] text-[0.875rem]">
          <span className="font-[600]">Note:</span> The answer provided in the
          answer book for this question is incorrect.
        </p>
      </div>
    </div>
  );
};

export default QuestionNote;
