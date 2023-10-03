import React from "react";
import QuestionBoxHead from "../questionboxhead";
import QuestionMainBox from "../questionmainbox";
import QuestionNote from "../questionnote";

const QuestionContent = ({ data, setter }: any) => {
  return (
    <section className=" bg-white rounded-tl-[0.5rem] rounded-tb-[0.5rem] p-[1.5rem] flex flex-col gap-[0.75rem] max-w-[56.5rem] w-full">
      <QuestionBoxHead currentQuestion={data} />
      <QuestionMainBox currentQuestion={data} setter={setter} />
      <QuestionNote currentQuestion={data} />
    </section>
  );
};

export default QuestionContent;
