import React from "react";
import QuestionListItems from "../questionlistitems";
import { useSelector } from "react-redux";
import { quizSelector } from "@/app/state/slices/quizSlice";

const QuestionList = ({ setter }: any) => {
  const { questionlist } = useSelector(quizSelector);
  return (
    <div className="grid grid-cols-3 gap-[0.5rem]">
      {questionlist?.map((list: any) => {
        return <QuestionListItems key={list.id} data={list} setter={setter} />;
      })}
    </div>
  );
};

export default QuestionList;
