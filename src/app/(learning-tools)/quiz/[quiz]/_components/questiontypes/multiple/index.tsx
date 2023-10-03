"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";
const MultipleChoice = ({ currentQuestion }: any) => {
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const [changeValue, setChangeValue] = useState(() => inputAnswer || []);
  const dispatch = useDispatch();

  const question = questionlist.find((q: any) => q.id === currentQuestion);

  // Check if an option is selected
  const isOptionSelected = (option: any) =>
    changeValue && changeValue.includes(option._answer);

  // Function to toggle the selection of an option
  const toggleOption = (option: any) => {
    if (isOptionSelected(option)) {
      // If option is selected, remove it
      setChangeValue((prevAnswers: any) =>
        prevAnswers.filter((val: any) => val !== option._answer)
      );
    } else {
      // If option is not selected, add it
      changeValue
        ? setChangeValue((prevAnswers: any) => [...prevAnswers, option._answer])
        : setChangeValue([option._answer]);
    }
  };
  useEffect(() => {
    dispatch(setInputAnswer(changeValue));
  }, [changeValue]);
  return (
    <div>
      {question?.answer.map((option: any, index: any) => (
        <div key={index} className="flex gap-[10px]">
          <Checkbox
            id={`multiple-${index}`}
            checked={isOptionSelected(option)}
            onCheckedChange={() => toggleOption(option)}
           disabled={
                question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
              }
          />
          <Label
            htmlFor={`multiple-${index}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option._answer}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
