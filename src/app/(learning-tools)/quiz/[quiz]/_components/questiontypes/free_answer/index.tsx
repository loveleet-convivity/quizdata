"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";

const FreeChoice = ({ currentQuestion }: any) => {
  // State to store the user's answer
  // const [answer, setAnswer] = useState("");
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const question = questionlist?.find((q: any) => q.id === currentQuestion);
  const dispatch = useDispatch();

  // Handle changes in the textarea input
  const handleChange = (e: any) => {
    dispatch(setInputAnswer(e.target.value));
  };

  return (
    <div>
      {/* <h1>Free Text Question</h1>
      <p>Please provide your answer in the textarea below:</p> */}
      <Input
        type="text"
        value={inputAnswer ? inputAnswer : ""}
        onChange={(e) => handleChange(e)}
        placeholder="answer"
        disabled={
          question?.status==="CORRECT" ||
          question.status==="FLAGGED" ||
          question.studentAttempts >= question.questionAttempts
        }
      />
      {/* <div>
        <p>Your Answer:</p>
        <p>{answer}</p>
      </div> */}
    </div>
  );
};

export default FreeChoice;
