"use client";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SortingQuestion({ currentQuestion }: any) {
  // State to store the user's sorted order
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const dispatch = useDispatch();
  const question = questionlist.find((q: any) => q.id === currentQuestion);
  // // Initialize userOrder with inputAnswer when the component mounts
  // useEffect(() => {
  //   setUserOrder(inputAnswer || []);
  // }, [inputAnswer]);

  const [userOrder, setUserOrder] = useState(inputAnswer || []);

  useEffect(() => {
    const shuffleOrder = () => {
      const shuffledOrder = question?.answer?.map((item: any) => item._answer);
      for (let i = shuffledOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOrder[i], shuffledOrder[j]] = [
          shuffledOrder[j],
          shuffledOrder[i],
        ];
      }
      setUserOrder(shuffledOrder);
      dispatch(setInputAnswer(shuffledOrder));
    };
    if ((!inputAnswer || inputAnswer.length === 0) && question) {
      shuffleOrder();
    }
  }, [question, currentQuestion, inputAnswer, dispatch]);

  // Function to handle drag start
  const handleDragStart = (event: any, item: any) => {
    event.dataTransfer.setData("text/plain", item);
  };

  // Function to handle drag over
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  // Function to handle drop
  const handleDrop = (event: any, index: any) => {
    if (
      question?.status === "CORRECT" ||
      question.status === "FLAGGED" ||
      question.studentAttempts >= question.questionAttempts
    ) {
      // If the question is correct, flagged, or attempts are over, do nothing
      return;
    }

    const draggedItem = event.dataTransfer.getData("text/plain");
    const updatedOrder: any = [...userOrder];

    // Remove the dragged item
    const draggedIndex = updatedOrder.indexOf(draggedItem);
    updatedOrder.splice(draggedIndex, 1);

    // Insert the dragged item at the new position
    updatedOrder.splice(index, 0, draggedItem);

    setUserOrder(updatedOrder);
    dispatch(setInputAnswer(updatedOrder));
  };

  // Function to move an item up in the list
  const moveItemUp = (index: any) => {
    if (
      question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
    ) {
      // If the question is correct, flagged, or attempts are over, do nothing
      return;
    }

    if (index > 0) {
      const updatedOrder = [...userOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index - 1];
      updatedOrder[index - 1] = temp;
      setUserOrder(updatedOrder);
      dispatch(setInputAnswer(updatedOrder));
    }
  };

  // Function to move an item down in the list
  const moveItemDown = (index: any) => {
    if (
      question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
    ) {
      // If the question is correct, flagged, or attempts are over, do nothing
      return;
    }

    if (index < userOrder.length - 1) {
      const updatedOrder = [...userOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index + 1];
      updatedOrder[index + 1] = temp;
      setUserOrder(updatedOrder);
      dispatch(setInputAnswer(updatedOrder));
    }
  };

  return (
    <div>
      <ul>
        {userOrder.map((item: any, index: any) => (
          <li
            key={item}
            draggable={
              (question?.status!=="CORRECT" &&
                question?.studentAttempts < question?.questionAttempts) ||
              question?.status==="FLAGGED"
            }
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item}
            <button
              onClick={() => moveItemUp(index)}
              disabled={
                question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
              }
            >
              &uarr;
            </button>
            <button
              onClick={() => moveItemDown(index)}
              disabled={
                question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
              }
            >
              &darr;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortingQuestion;
