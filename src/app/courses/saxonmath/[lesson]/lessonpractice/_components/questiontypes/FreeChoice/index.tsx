"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const FreeChoice = ({ hello }: any) => {
  // State to store the user's answer
  const [answer, setAnswer] = useState("");

  // Handle changes in the textarea input
  const handleAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      {/* <h1>Free Text Question</h1>
      <p>Please provide your answer in the textarea below:</p> */}
      <Textarea
        className="border-gray-300 rounded-lg"
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Type your answer here..."
      />
      {/* <div>
        <p>Your Answer:</p>
        <p>{answer}</p>
      </div> */}
    </div>
  );
};

export default FreeChoice;
