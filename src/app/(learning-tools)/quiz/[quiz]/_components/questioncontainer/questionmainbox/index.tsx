"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswer,
  checkcorrect,
  quizSelector,
  setInputAnswer,
} from "@/app/state/slices/quizSlice";
import { DynamicQuestion } from "../../questiontypes/dynamic";

const QuestionMainBox = ({ currentQuestion, setter }: any) => {
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const dispatch = useDispatch();
  const question = questionlist?.find((q: any) => q.id === currentQuestion);
  if (!question) {
    return <p>No question type defined for this question.</p>;
  }
  
  function handlesubmit(questionId: any, value: any) {
    if (question?.type !== "single" && question?.type !== "free_answer") {
      const checknullorempty =
        Array.isArray(value) &&
        value?.every((val) => val !== null && val !== "");
      if (
        currentQuestion &&
        value !== null &&
        value !== undefined &&
        value !== "" &&
        checknullorempty &&
        value.length !== 0
      ) {
        dispatch(addAnswer({ questionId, value }));
        dispatch(checkcorrect({ questionId, value }));
      }
    } else if (
      question?.type === "single" ||
      question?.type === "free_answer"
    ) {
      if (
        currentQuestion &&
        value !== null &&
        value !== undefined &&
        value !== "" &&
        value.length !== 0
      ) {
        dispatch(addAnswer({ questionId, value }));
        dispatch(checkcorrect({ questionId, value }));
      }
    }
  }
  function handleNext() {
    let nextquestionId:any;
    let questionindex=questionlist.indexOf(question)+1;
    for(questionindex;questionindex<questionlist.length;questionindex++)
    {
      let questionitems=questionlist[questionindex]

      if(questionitems.studentAttempts<questionitems.questionAttempts && questionitems.status!=="CORRECT" && questionindex!==questionlist.length-1)
      {
        setter(questionitems.id);
        nextquestionId=questionitems.id;
        break;
      }
      else if(questionindex === questionlist.length-1)
      {
        setter(questionitems.id)
      }
      else
      {
        continue;
      }
    }
    const nextquestionIdData = questionlist.find(
      (q: any) => q.id === nextquestionId
    );
    dispatch(
      setInputAnswer(
        nextquestionIdData?.studentAttempts > 0
          ? nextquestionIdData?.studentAnswer[nextquestionIdData?.studentAttempts - 1]
          : null
      )
    );
  }
  // let QuestionType = getDynamicComponent(question?.type);
  return (
    <div className="w-full flex flex-col gap-[0.75rem]">
      <p className="text-[#03080E] font-[400] text-[0.875rem]">
        Question details here dolor sit amet, consectur elit, sed to end.
      </p>
      <div className="flex flex-col gap-[0.5rem]">
        <p className=" font-[500] text-gray-700 text-[0.875rem]">Answer</p>
        <div className="flex w-full max-md:flex-col justify-between gap-[0.5rem]">
          <div className="w-full text-[#03080E] text-[0.75rem]">
            <DynamicQuestion
              questionType={question?.type}
              currentQuestion={currentQuestion}
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-[0.25rem] max-md:w-full">
            {(question?.studentAttempts >= question.questionAttempts ||
              question?.status==="CORRECT" ||
              question?.status==="FLAGGED") &&
            questionlist.indexOf(question) !==
              questionlist.length - 1 ? (
              <Button
                variant="primary"
                className="w-[10rem] max-md:w-[100%] text-white rounded-xl"
                onClick={handleNext}
              >
                Next Question
              </Button>
            ) : (
              <Button
                variant="primary"
                className="w-[10rem] max-md:w-[100%] text-white rounded-xl"
                onClick={() => handlesubmit(currentQuestion, inputAnswer)}
                disabled={
                  question?.studentAttempts >= question.questionAttempts ||
                  question?.status==="CORRECT" ||
                  question?.status==="FLAGGED"
                }
              >
                Check
              </Button>
            )}

            <p className="text-[0.875rem] text-[#3333FF]">
              {question.questionAttempts - question?.studentAttempts} attempt left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMainBox;
