import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import ReactHtmlParser from "react-html-parser";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";
import { Input } from "@/components/ui/input";

function FillInTheBlank({ currentQuestion }: any) {
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const dispatch = useDispatch();
  const question = questionlist?.find((q: any) => q.id === currentQuestion);

  if (!question) {
    // Handle the case where question is not found
    return null;
  }
  // Get the question text
  const questionText = question?.answer[0]?._answer;

  if (!questionText) {
    // Handle the case where questionText is not defined
    return null;
  }

  // Regular expression to match placeholders inside curly braces
  const answersToReplace = questionText.match(/\{.*?\}/g);

  // Initialize the userAnswers array with the same length as answersToReplace
  const initialUserAnswers = answersToReplace
    ? Array(answersToReplace.length).fill("")
    : [];

  const [userAnswers, setUserAnswers] = useState(
    inputAnswer || initialUserAnswers
  );

  // Update user answers when input changes
  const handleInputChange = (index: any, newValue: any) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = newValue;
    setUserAnswers(newAnswers);
  };
  useEffect(() => {
    dispatch(setInputAnswer(userAnswers));
  }, [userAnswers, dispatch]);

  useEffect(() => {
    if (inputAnswer) {
      setUserAnswers(inputAnswer);
    } else {
      setUserAnswers(initialUserAnswers);
    }
  }, [inputAnswer, initialUserAnswers]);

  // Dispatch the user answers to the Redux store

  // Split the question text into parts and input fields
  const questionParts = questionText.split(/(\{.*?\})/);

  return (
    <div className="dynamic_answer">
      {questionParts.map((part: any, index: any) => {
        if (answersToReplace && answersToReplace.includes(part)) {
          const inputIndex = answersToReplace.indexOf(part);
          return (
            <Input
              key={index}
              type="text"
              placeholder="Enter your answer"
              value={(userAnswers && userAnswers[inputIndex]) || ""}
              onChange={(e) => handleInputChange(inputIndex, e.target.value)}
              disabled={
                question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
              }
            />
          );
        } else {
          return ReactHtmlParser(part);
        }
      })}
    </div>
  );
}

export default FillInTheBlank;
