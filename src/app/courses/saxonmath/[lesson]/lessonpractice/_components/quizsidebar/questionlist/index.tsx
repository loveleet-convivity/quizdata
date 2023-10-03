import React from "react";
import QuestionListItems from "../questionlistitems";

const QuestionList = ({ data, setter }: any) => {
  return (
    <>
      {data?.map((list: any) => {
        return <QuestionListItems key={list.id} data={list} setter={setter} />;
      })}
    </>
  );
};

export default QuestionList;
