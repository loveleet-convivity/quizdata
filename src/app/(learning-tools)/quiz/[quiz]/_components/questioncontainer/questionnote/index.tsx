"use client";
import { quizSelector } from "@/app/state/slices/quizSlice";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";

const QuestionNote = ({ currentQuestion }: any) => {
  const { questionlist } = useSelector(quizSelector);
  const [play] = useSound("/sound/correct.mp3");
  const question = questionlist?.find((q: any) => q.id === currentQuestion);

  return (
    <div className="flex justify-center w-full">
      {/* <div className="bg-[#FDEFDB] text-[#A07332] border-[#F6B14D] border-[1px] rounded-[1rem] gap-[0.5rem] text-[0.875rem] font-[600] flex items-start px-[0.75rem] py-[0.25rem]">
        <AlertCircle />
        <p className="font-[400] text-[0.875rem]">
          <span className="font-[600]">Note:</span> The answer provided in the
          answer book for this question is incorrect.
        </p>
      </div> */}
      {question?.status==="CORRECT" && (
        <Badge className="bg-[#D8F7EF] border-[#3BD6B0]">
          🎉 Correct! Nice Job.
        </Badge>
      )}
      {question?.status === "INCORRECT" && (
        <Badge className="bg-[#FBDEDC] border-[#E95C51]">
          🤔 Ooops. Try again!
        </Badge>
      )}
      {/* <button onClick={() => play()}>Boop!</button>; */}
    </div>
  );
};

export default QuestionNote;
