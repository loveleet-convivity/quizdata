"use client";
import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { flagQuestion, quizSelector } from "@/app/state/slices/quizSlice";
// @ts-ignore
import ReactHtmlParser from "react-html-parser";

const QuestionBoxHead = ({ currentQuestion }: any) => {
  const { questionlist } = useSelector(quizSelector);
  const dispatch = useDispatch();
  const question = questionlist?.find((q: any) => q.id === currentQuestion);
  // const [flag, setFlag] = useState(false);
  // console.log(question, "<<<<<<<<<<,");
  function handleflag(questionId: any) {
    dispatch(flagQuestion({ questionId }));
  }
  return (
    <div className="flex justify-between max-md:flex-col">
      <div className=" text-[1.5rem] font-[700] text-[#03080E]">
        {ReactHtmlParser(question?.question)}
      </div>
      <div>
        <Button
          onClick={() => handleflag(currentQuestion)}
          className="flex font-[400] text-[0.875rem] justify-start p-0 text-gray-500"
          disabled={
            question?.studentAttempts >= question?.questionAttempts ||
            question?.status==="CORRECT"
          }
        >
          {question?.status==="FLAGGED" ? (
            <Bookmark fill="#F6B14D" color="#F6B14D" />
          ) : (
            <Bookmark />
          )}
          Flag for later
        </Button>
      </div>
    </div>
  );
};

export default QuestionBoxHead;
