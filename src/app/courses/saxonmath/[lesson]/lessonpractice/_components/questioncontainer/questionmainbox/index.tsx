import React from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const QuestionMainBox = ({ currentQuestion }: any) => {
  const getDynamicComponent = (c: any): any =>
    dynamic(() => import(`../../questiontypes/${c}`), {
      ssr: false,
      loading: () => <p>Loading...</p>,
    });
  let QuestionType = getDynamicComponent(currentQuestion.questiontype);
  return (
    <div className="w-full flex flex-col gap-[0.75rem]">
      <p className="text-[#03080E] font-[400] text-[0.875rem]">
        Question details here dolor sit amet, consectur elit, sed to end.
      </p>
      <div className="flex flex-col gap-[0.5rem]">
        <p className=" font-[500] text-gray-700 text-[0.875rem]">Answer</p>
        <div className="flex w-full justify-between gap-[0.5rem]">
          <div className="w-full text-[#03080E] text-[0.75rem]">
            <QuestionType hello={"hello"} />
          </div>
          <div className="flex flex-col items-center gap-[0.25rem] max-md:w-full">
            <Button
              variant="primary"
              className="w-[10rem] max-md:w-[100%] text-white rounded-xl"
            >
              Check
            </Button>

            <p className="text-[0.875rem] text-[#3333FF]">
              {6 - currentQuestion.attempts} attempt left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMainBox;
