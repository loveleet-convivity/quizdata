import React, { useState } from "react";

const QuestionBox = ({ children }: any) => {
  return (
    <section className="flex my-auto mx-auto pr-[1rem] pl-[1rem] w-full max-w-[59rem]">
      {children}
    </section>
  );
};

export default QuestionBox;
